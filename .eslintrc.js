module.exports = {
  extends: ['react-app'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'import/no-anonymous-default-export': [1, {
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true, // The true value here is for backward compatibility
          allowLiteral: false,
          allowObject: true,
        }],
        'comma-dangle': [1, 'always-multiline'],
        'func-call-spacing': [1, 'never'],
        'space-infix-ops': 1,
        quotes: [1, 'single', 'avoid-escape'],
        'no-trailing-spaces': [1, { 'ignoreComments': true }],
        'prefer-template': 1,
        'eol-last': [1, 'always'],
        'react/jsx-max-props-per-line': [1, { 'maximum': 2, 'when': 'always' }],
        'no-confusing-arrow': [2, { allowParens: false }],
        'key-spacing': [1, {
          beforeColon: false,
          afterColon: true,
        }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 1,
        'object-curly-newline': [1, {
          ObjectExpression: { multiline: true, minProperties: 1 },
          ObjectPattern: { multiline: true, minProperties: 3 },
          ImportDeclaration: { multiline: true, minProperties: 3 },
          ExportDeclaration: { multiline: true, minProperties: 3 },
        }],
        'indent': [1, 2],
        'object-property-newline': [1, {
          allowAllPropertiesOnSameLine: false,
        }],
        'object-curly-spacing': [1, 'always'],
      },
    },
  ],
};