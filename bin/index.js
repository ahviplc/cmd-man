#!/usr/bin/env node
const os = require('os')
const fs = require('fs')
const chalk = require('chalk')
// 引入工具类合集
const utils = require('./utils/utils')

// console.log(utils)
// console.log('utils.getPWD()', utils.getPWD())
// console.log('utils.getPWD2()', utils.getPWD2())
// console.log('utils.getRealProPWD()', utils.getRealProPWD())
// console.log('utils.getProPWD()', utils.getProPWD())

// utils.getPWD() /Volumes/MacOS-SSD-LCKu/DevelopSoftKu/idea/codeKu/cmd-man/bin
// utils.getPWD2() /Volumes/MacOS-SSD-LCKu/DevelopSoftKu/idea/codeKu/cmd-man/bin/utils
// utils.getRealProPWD() /Volumes/MacOS-SSD-LCKu/DevelopSoftKu/idea/codeKu/cmd-man/
// utils.getProPWD() /Volumes/MacOS-SSD-LCKu/DevelopSoftKu/idea/codeKu/cmd-man/bin/

// 获取package.json数据的object对象
// const packageInfoObj = utils.getPackageInfo3()
const packageInfoObj = utils.getPackageInfo4('package.json')

console.log('\n ======================================')
console.log(' |  ' + chalk.white('cmd-man ') + chalk.green.bold.bgWhite('Show Your PC Env') + '  |')
console.log(' ======================================\n')

const { Command } = require('commander') // (normal include)
const program = new Command()

program
  .version(packageInfoObj.version, '-V, --version', 'output cmd-man the version number')
  .description('Show Your PC Env')
  .option('-l, --language <default zh>', 'select language => zh | en', 'zh')
  .option('-a, --all', 'output all information')
  .option('-ip, --ip', 'output ip address')
  .option('-os, --os', 'output operator system')
  .option('-arch, --arch', 'output processor architecture')
  .option('-tm, --tm', 'output total memory')
  .option('-fm, --fm', 'output free memory')
  .option('-cpu, --cpu', 'output cpu detail')
  .option('-host, --host', 'output host in darwin')
  .helpOption('-h, --help', 'display help for command')

// console.log(program.usage())

// process.argv 数组下标2之后 是实际的入参 所以 process.argv.slice(2) 截取一下
if (!process.argv.slice(2).length) {
  program.outputHelp()
}

program.parse(process.argv)

const options = program.opts()

const lan = options.language || 'zh'

const lanMap = {
  en: {
    ip: ' IP           : ',
    os: ' OS           : ',
    arch: ' Arch       : ',
    tm: ' Total Memory : ',
    fm: ' Free Memory  : ',
    cpu: ' CPU         : ',
    host: ' Host       : '
  },
  zh: {
    ip: ' IP地址       : ',
    os: ' 操作系统      : ',
    arch: ' 处理器      : ',
    tm: ' 机身内存大小   : ',
    fm: ' 可用内存大小   : ',
    cpu: ' CPU配置      : ',
    host: ' Host配置    : '
  }
}

// console.log(lanMap)
// console.log(lanMap.en)

const label = lanMap[lan]

const map = {
  darwin: 'Mac OSX', linux: 'linux', win32: 'Windows x32', win64: 'Windows x64'
}

const cmdMap = {
  ip: function (label) {
    // 不是 darwin 是 win32
    if (process.platform !== 'darwin' && process.platform === 'win32') {
      if (os.networkInterfaces().以太网) {
        return console.log(chalk.green(label.ip), os.networkInterfaces().以太网[1].address)
      }
      return console.log(chalk.green(label.ip), 'networkInterfaces下没有 以太网 属性,无法得出ip')
    }

    // TODO 代码待完善
    // 其他情况
    // 不是 darwin 是 win64
    // 不是 darwin 是 linux

    // 最后肯定是 darwin 的情况
    console.log(chalk.green(label.ip), os.networkInterfaces().en0[1].address)
  },
  os: function (label) {
    console.log(chalk.green(label.os), (map[process.platform] || 'Unknow'))
  },
  arch: function (label) {
    console.log(chalk.green(label.arch), os.arch())
  },
  tm: function (label) {
    console.log(chalk.green(label.tm), (os.totalmem() / Math.pow(2, 30) + 'GB'))
  },
  fm: function (label) {
    const pow = os.freemem() >= Math.pow(2, 30) ? 30 : 20
    const unit = pow === 30 ? 'GB' : 'MB'
    console.log(chalk.green(label.fm), (parseInt(os.freemem() / Math.pow(2, pow)) + unit))
  },
  cpu: function (label) {
    console.log(chalk.green(label.cpu), os.cpus()[0].model)
  },
  host: function (label) {
    if (process.platform !== 'darwin') {
      return console.log(chalk.green(label.host), 'Sorry, output host just support in Mac OSX.')
    }
    const hosts = fs.readFileSync('/etc/hosts').toString('utf-8').split(/\s+/g)
    const pureHosts = []
    let hostString = ''
    for (let i = 0; i < hosts.length; i++) {
      if (hosts[i]) pureHosts.push(hosts[i])
    }
    for (let j = 0; j < pureHosts.length; j++) {
      const prefix = (j === 0) ? '' : ' ||  '

      if (/^[1-9]/.test(pureHosts[j])) {
        hostString += prefix + pureHosts[j] + ' --> '
      } else if (/^#/.test(pureHosts[j])) {
        hostString += (prefix + pureHosts[j] + ' -x- ')
      } else {
        hostString += pureHosts[j] + ' '
      }
    }
    console.log(chalk.green(label.host), hostString)
  },
  me: function () {
    console.log('\n [ Github: https://github.com/ahviplc/cmd-man, by LC ]\n')
  }
}

/*
 * output all imformation
 */
if (options.all) {
  for (const i in cmdMap) {
    cmdMap[i].call(this, label)
  }
}

/*
 * output ip address, just ipv4
 */
options.ip && cmdMap.ip(label)

/*
 * output the operator system,
 * mainstream os such as: mac osx, linux, and windows(x32|x64)
 */
options.os && cmdMap.os(label)

/*
 * output processor architecture,
 * such as: arm, ia32 and x64
 */
options.arch && cmdMap.arch(label)

/*
 * output total memory
 */
options.tm && cmdMap.tm(label)

/*
 * output free memory
 */
options.fm && cmdMap.fm(label)

/*
 * output cpu detail
 */
options.cpu && cmdMap.cpu(label)

/*
 * output host
 */
options.host && cmdMap.host(label)

// 是 -a 全部显示pc env的时候 不执行
if (!options.all) {
  cmdMap.me()
}

// 执行命令
// node bin/index.js -a
// node bin/index.js --all
