// const fs = require('fs')
// const path = require('path')
const shellExec = require('shell-exec')
// 引入工具类合集
const utils = require('./utils')
const packageInfoObj = utils.getPackageInfo4('package.json')

const version = packageInfoObj.version
console.log('...cmd-man@version...', version)

// fs.readdirSync(path[, options]) 同步
// fs.readdir(path[, options], callback) 异步 有回调函数
// 读取目录的内容
// 方法将返回一个包含“指定目录下所有文件名称”的数组对象
// const pkgs = fs.readdirSync(path.resolve(__dirname, ''))
// console.log(pkgs)  // [ 'unpublish.js', 'utils.js' ]

async function shellRun () {
  console.log(`npm unpublish cmd-man@${version}`)
  const results = await shellExec(`npm unpublish cmd-man@${version}`)
  console.log('...shellRun...result...', results)
}

// 执行 shellRun()
shellRun()

// 执行其他 shellExec()
shellExec('node -v')
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(console.log('...shellExec Done...'))
