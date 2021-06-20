module.exports = {
  env: {
    browser: false,
    commonjs: true,
    node: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    'no-else-return': ['error', { allowElseIf: false }],
    'no-var': 'warn', // 不使用 var
    'one-var': 'off',
    'space-before-function-paren': ['error', 'never'],
    // 关闭语句强制分号结尾 semi: ['error', 'always']
    // semi: ['warn'], 和 semi: [1], 等价
    // semi: [2], 代表 error 和 semi: ['error'], 等价
    semi: [1], // warn级别 不要分号
    quotes: ['warn', 'single'], // 单引号
    indent: [1, 2], // warn级别 设置缩进为2
    'no-void': 'error', // 禁用 void 操作符
    'no-unused-vars': 'warn' // 禁止出现未使用过的变量
  },
  extends: ['standard',
    'plugin:jest/recommended'
  ]
}

// "off" 或 0 - 关闭规则
// "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
// "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
