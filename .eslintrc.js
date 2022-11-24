module.exports = {
  root: true,
  env: {
    'browser': true,
    'node': true
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: [],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  settings: {
    'react': {
      'pragma': 'React',
      'version': 'detect'
    }
  },
  rules: {
    '@typescript-eslint/no-unsafe-assignment': ['off'],
    '@typescript-eslint/no-floating-promises': ['off'],
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'eqeqeq': ['error', 'smart'],
    'security/detect-object-injection': 'off',
    '@typescript-eslint/no-unused-vars': 0,
    "@typescript-eslint/strict-boolean-expressions" : 'off'

  }
};
