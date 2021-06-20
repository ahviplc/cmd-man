#!/usr/bin/env node
console.log('tests/main.js')

const { program } = require('commander')

program
  .version('0.0.1')
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')
  .option('-cc, --lc', '执行lc diy')
  .helpOption('-h, --help', ' display help for command')

program.parse(process.argv)

const options = program.opts()
if (options.debug) console.log(options)
console.log('pizza details:')
if (options.small) console.log('- small pizza size')
if (options.pizzaType) console.log(`- ${options.pizzaType}`)

// test命令
// node test.js - d - s - p cheese
