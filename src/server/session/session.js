'use strict';

const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

function Session(app) {
  // Add session middleware
  app.use(session({
    secret: 'potato',
    resave: false,
    saveUninitialized: false
  }));

  // Create a local user
  const localUser = {
    id: 1,
    username: 'admin',
    password: 'admin'
  };

  // Function to find a user
  function findUser(username, done) {
    if (username === localUser.username) {
      return done(null, localUser);
    }

    return done(null);
  }

  // Add Passport middleware
  app.use(passport.initialize());
  app.use(passport.session());

  // Create a strategy
  const Strategy = new LocalStrategy((username, password, done) => {
    findUser(username, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (password !== user.password) {
        return done(null, false);
      }

      return done(null, user);
    });

    return done(null, false);
  });

  // Add the strategy to Passport
  passport.use(Strategy);

  // Store the user's id in the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Retrieve the user's session by id
  passport.deserializeUser((id, done) => {
    done(null, id);
  });

  // Add a login route
  app.post('/login', passport.authenticate('local'), (req, res) => {
    res.redirect('/users');
  });
}

module.exports = Session;
