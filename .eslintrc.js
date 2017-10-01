module.exports = {
  root: true,
  extends: 'eslint-config-airbnb-base',
  parserOptions: {
    sourceType: 'script'
  },
  rules: {
    /**
     * Errors
     * Extends: https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/errors.js
     */
    // Rule: disallow or enforce trailing commas
    // Docs: http://eslint.org/docs/rules/comma-dangle
    // Airbnb: 'comma-dangle': [2, 'always-multiline']
    'comma-dangle': [2, 'never'],

    /**
     * Style
     * Extends https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
     */
    // Rule: enforce consistent linebreak style
    // Docs: http://eslint.org/docs/rules/linebreak-style
    // Airbnb: 'linebreak-style': ['error', 'unix']
    'linebreak-style': [0, 'unix']
  }
};
