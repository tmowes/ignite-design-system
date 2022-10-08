module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:sonarjs/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    "plugin:mdx/recommended",
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'sonarjs', '@typescript-eslint', 'import-helpers', 'prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        trailingComma: 'all',
        endOdLine: 'lf',
        bracketSpacing: true,
        singleQuote: true,
        tabWidth: 2,
        printWidth: 96,
        semi: false,
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'implicit-arrow-linebreak': 'off',
    camelcase: 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-unneeded-ternary': 'error',
    'no-unused-vars': 'off',
    'react/no-children-prop': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsForRegex: ['^acc', '^client', '^draft'],
      },
    ],
    'no-shadow': 'off',
    'prefer-template': 'error',
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-shadow': ['error'],
    'import/prefer-default-export': 'off',
    'import/no-duplicates': 'off',
    'import/no-named-as-default': 'off',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['/^react$/', '/^react-(native|dom)$/', '/^next/'],
          'module',
          [
            '/^@(assets|common|components|constants|contexts|hooks|mocks|pages|routes|services|styles|utils|shared|store)/',
            '/^~/',
          ],
          ['parent', 'sibling'],
          'index',
        ],
        alphabetize: {
          order: 'ignore',
          ignoreCase: true,
        },
      },
    ],
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: "*.mdx",
      // "parser": "eslint-mdx", // enable `eslint-mdx` manually if it does not work
      extends: "plugin:mdx/recommended"
    }
  ]
}
