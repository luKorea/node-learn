#!/usr/bin/env node
const program = require('commander');

// 1. 查看当前脚手架版本
// 当前版本号
const versionInfo = '当前coder-cli脚手架版本为：' + require('./package.json').version;
// 支持小写查看版本号
const lowerCaseCommand = '-v --version';
program.version(versionInfo, lowerCaseCommand);
// 2. 解析终端命令
program.parse(process.argv);