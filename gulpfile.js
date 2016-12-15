'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./config');

const paths = config.paths;

// Lint all JavaScript files
gulp.task('lint', () => {
  return gulp.src(['./gulpfile.js', './config', paths.server.jsFiles])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format());
});

// wire up all js files
gulp.task('bower', () => {
  return gulp.src([paths.client.index])
    .pipe(plugins.wiredep({
        ignorePath: '../../',
    }))
    .pipe(gulp.dest(paths.client.base));
});

gulp.task('inject', ['bower'], () => {
  var target = gulp.src([paths.client.index]);
  var sources = gulp.src([paths.client.modules, paths.client.directives, paths.client.controllers, paths.client.factories], {read: false});

  return target
    .pipe(plugins.inject(sources, {ignorePath: 'src/client'}))
    .pipe(gulp.dest('./src/client'));
});

// Run the unit tests
gulp.task('unit-test', () => {
  return gulp.src(paths.server.specs)
    .pipe(plugins.mocha({
      reporter: 'progress'
    }));
});

// Initialize the unit test coverage
gulp.task('pre-unit-test-report', () => {
  return gulp.src(paths.server.coverage)
    // FIXME: Coverage is giving 0%
    // Covering files
    .pipe(plugins.istanbul({
      includeUntested: true
    }))
    // Force 'require' to return covered files
    .pipe(plugins.istanbul.hookRequire());
});

// Report the unit test coverage
gulp.task('unit-test-report', ['pre-unit-test-report'], () => {
  return gulp.src(paths.server.specs)
    // Unit test the files
    .pipe(plugins.mocha())
    // Create the report
    .pipe(plugins.istanbul.writeReports({
      dir: './tests/coverage'
    }));
});

// Start the server
gulp.task('serve', ['lint', 'inject'], () => {
  process.env.port = config.env.port;

  const options = {
    script: paths.server.app,
    env: {
      port: config.env.port
    },
    watch: paths.server.base,
    tasks: ['lint', 'unit-test']
  };

  return plugins.nodemon(options);
});

// List the available gulp tasks
gulp.task('help', plugins.taskListing);

// Default task
gulp.task('default', ['help']);
