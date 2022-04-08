/**
 * @description 创建指令
 */
const program = require('commander');
const {
  createProjectAction
} = require('./actions')

const createCommands = () => {
  program.command('create <project> [others...]') // 创建指令，<something>代表该指令必填参数【 others...】其他参数
    .description('Clone the remote repository to a folder 克隆远程仓库到某一个文件夹') // 指令描述
    .action(createProjectAction) // 执行指令
}

module.exports = {
  createCommands
}