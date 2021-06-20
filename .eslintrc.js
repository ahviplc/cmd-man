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
    // 关闭语句强制分号结尾
    // semi: ['error', 'always']
    // always (默认) 要求在语句末尾使用分号 "never" 禁止在语句末尾使用分号 (除了消除以 [、(、/、+ 或 - 开始的语句的歧义)
    // semi: ['warn'], 和 semi: [1], 等价
    // semi: [2], 代表 error 和 semi: ['error'], 等价
    semi: [1, 'never'], // warn级别 不要分号
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'always'], // 方法名后面 ()前面加一个空格 always 使用 never 不使用
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
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
