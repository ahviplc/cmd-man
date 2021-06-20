// 工具类合集

const fs = require('fs')
const path = require('path')

// 写法1
// 获取package.json数据的object对象
exports.getPackageInfo = () => {
  const _packageInfo = fs.readFileSync('../package.json')
  // json字符串 转成 object对象
  return JSON.parse(_packageInfo)
}

// 写法2
// 获取package.json数据的object对象
function getPackageInfo2 () {
  const _packageInfo = fs.readFileSync('../package.json')
  // json字符串 转成 object对象
  return JSON.parse(_packageInfo)
}

exports.getPackageInfo2 = getPackageInfo2

// 写法3
// 获取package.json数据的object对象
function getPackageInfo3 () {
  const _packageInfo = fs.readFileSync(path.join(getRealProPWD(), 'package.json'))
  // json字符串 转成 object对象
  return JSON.parse(_packageInfo)
}

// 写法4
// 获取package.json数据的object对象
// 参数说明
// filePath 文件路径 默认从项目根目录开始
exports.getPackageInfo4 = (filePath) => {
  // console.log('...filePath', path.join(getRealProPWD(), filePath)) // ...filePath /Volumes/MacOS-SSD-LCKu/DevelopSoftKu/idea/codeKu/cmd-man/package.json
  const _packageInfo = fs.readFileSync(path.join(getRealProPWD(), filePath))
  // json字符串 转成 object对象
  return JSON.parse(_packageInfo)
}

module.exports.getPackageInfo3 = getPackageInfo3

// 返回 Node.js 进程的当前工作目录
// 也就是执行此方法的js文件所在的目录
// eslint-disable-next-line no-unused-vars
function getPWD () {
  return process.cwd()
}

module.exports.getPWD = getPWD

// 当前运行文件所在的目录
// __dirname 总是指向被执行 js 文件的绝对路径
// 当前模块的目录名
// path.dirname(__filename) 等价 __dirname
// eslint-disable-next-line no-unused-vars
function getPWD2 () {
  return __dirname
}

exports.getPWD2 = getPWD2

// 当前运行文件所在的目录 的上一级目录
// 也就是 getPWD2() 获取目录的上一级目录
// eslint-disable-next-line no-unused-vars
function getProPWD () {
  return path.join(__dirname, '../')
}

exports.getProPWD = getProPWD

// 实际项目目录
// 也就是 getProPWD() 获取目录的上一级目录
// 也就是 getPWD2() 获取目录的上二级目录
// eslint-disable-next-line no-unused-vars
function getRealProPWD () {
  return path.join(__dirname, '../../')
}

exports.getRealProPWD = getRealProPWD

// ==========================================================================================
// test

// console.log('getPWD', getPWD())
// console.log('getPWD2', getPWD2())
// console.log('getProPWD', getProPWD())
// console.log('getRealProPWD', getRealProPWD())

// getPWD /Volumes/MacOS-SSD-LCKu/DevelopSoftKu/idea/codeKu/cmd-man/bin/utils
// getPWD2 /Volumes/MacOS-SSD-LCKu/DevelopSoftKu/idea/codeKu/cmd-man/bin/utils
// getProPWD /Volumes/MacOS-SSD-LCKu/DevelopSoftKu/idea/codeKu/cmd-man/bin/
// getRealProPWD /Volumes/MacOS-SSD-LCKu/DevelopSoftKu/idea/codeKu/cmd-man/
// ==========================================================================================
