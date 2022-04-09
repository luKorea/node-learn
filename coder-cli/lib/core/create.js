/**
 * @description 创建指令
 */
const program = require('commander');
const {
  createProjectAction,
  addComponentAction,
  addPageAndRouterAction,
  addStoreAndTypeAction
} = require('./actions')

const createCommands = () => {
  // 创建指令 <something>代表该指令必填参数【 others...】其他参数
  program
    .command('create <project> [others...]')
    .description('Clone the remote repository to a folder 克隆远程仓库到某一个文件夹') // 指令描述
    .action(createProjectAction) // 执行指令
  // 新增组件命令
  program
    .command('addcpn <name>')
    .description('add new component to project 新增component组件到指定文件夹中（addcpn demo src/component [-d src/component]')
    .action((name) => {
      addComponentAction(name, program._optionValues.dest || 'src/components')
    })
  // 新增页面命令
  program
    .command('addpage <page>')
    .description('add new page to project 新增page组件到指定文件夹中（addcpn demo src/page [-d src/page]')
    .action((page) => {
      addPageAndRouterAction(page, program._optionValues.dest || 'src/pages')
    })
  program
    .command('addstore <store>')
    .description('add vue store, 例如: korea addstore favor [-d dest]')
    .action(store => {
      addStoreAndTypeAction(store, program._optionValues.dest || `src/store/modules/${store.toLowerCase()}`)
    })

}

module.exports = {
  createCommands
}