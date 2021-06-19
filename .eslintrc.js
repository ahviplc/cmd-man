module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        'no-else-return': ['error', {allowElseIf: false}],
        'no-var': 'warn',
        'one-var': 'off',
        'space-before-function-paren': ['error', 'never'],
        semi: ['error', 'always']
    },
    extends: ['standard',
        'plugin:jest/recommended'
    ]
};
