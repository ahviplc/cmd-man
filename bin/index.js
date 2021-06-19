#!/usr/bin/env node

const { Command } = require('commander'); // (normal include)
const program = new Command();

program
  .version('0.1.0')
  .description('An application for pizza ordering')
  .option('-p, --peppers', 'Add peppers')
  .option('-c, --cheese <type>', 'Add the specified type of cheese', 'marble')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .option('-cc, --lc', '执行lc diy')
  .helpOption('-h, --help', ' display help for command');

program.parse();

const options = program.opts();
console.log('you ordered a pizza with:');
if (options.peppers) console.log('  - peppers');
const cheese = !options.cheese ? 'no' : options.cheese;
console.log('  - %s cheese', cheese);

if (options.lc) {
  console.log('options.lc', options.lc);
  console.log('hello lc');
}

// 执行命令
// node bin/index.js -cc
