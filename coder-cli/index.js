#!/usr/bin/env node

const program = require('commander');
const {
  versionOptions
} = require('./lib/core/version')
const {
  otherOptions
} = require('./lib/core/help')
const {
  createCommands
} = require('./lib/core/create')
// 1. 查看当前脚手架版本
versionOptions()
// 2. 配置其他指令
otherOptions()
// 3. 创建自己的指令
createCommands()
// 4. 解析终端命令
program.parse(process.argv);
// 查看指令是否生效
// console.log('用户输入的指令是： ', program._optionValues)