// eslint.config.js
module.exports = [
    {
      files: ['src/**/*.js'],
      rules: {
        // Add your custom rules here
        'no-unused-vars': 'warn',
        'no-console': 'off'
      },
      env: {
        browser: true,
        es2021: true
      },
      extends: 'eslint:recommended',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
      }
    }
  ];
  