// 创建项目
/**
 * 1. 创建解析create指令
 * 2. 通过download-git-repo从代码仓库中下载模板进入目录
 * 3. 执行`npm install`命令
 * 4. 执行`npm run serve` 命令
 * 5. 打开浏览器
 */
const {
  promisify
} = require('util'); // 使用node工具库：promisify 转换函数为promise函数
const download = promisify(require('download-git-repo'));
const {
  vueRepository
} = require('../config/repo.config')



const createProjectAction = async (project, args) => {
  // 1. 下载模板
  await download(vueRepository)
  // 2. 执行npm install 命令
  // 3. 执行 npm run serve 命令
  // 4. 打开浏览器
}

module.exports = {
  createProjectAction
}