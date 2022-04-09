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
const path = require('path');
const download = promisify(require('download-git-repo'));
const open = require('open');

const {
  vueGitRepository
} = require('../config/repo.config')
const {
  commandSpawn
} = require('../utils/terminal')
const {
  compile,
  writeToFile,
  mkdirToSync
} = require('../utils')


const createData = (name) => {
  return {
    name,
    lowerName: name.toLowerCase()
  }
}

/**
 * @description 克隆远程仓库并安装打开项目
 * @param {*} project 
 * @param {*} args 
 */
const createProjectAction = async (project, args) => {
  try {
    console.log('客官正在下载模板，请稍等~~~')
    // 1. 下载模板
    await download(vueGitRepository, project, {
      clone: true
    })
    // 2. 执行npm install 命令
    // 判断当前环境，因win命令差异，需做判断
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    await commandSpawn(command, ['install'], {
      cwd: `./${project}`
    })
    // 3. 执行 npm run serve 命令，
    // 这里不加await目的是不阻塞后面代码执行，进程没有结束，后续不会进入resolve
    commandSpawn(command, ['run', 'serve'], {
      cwd: `./${project}`
    })
    // 4. 打开浏览器 
    open('http://localhost:8080/')
  } catch (err) {
    console.log('错误日志', err);
  }
}
/**
 * @description 新增组件指令
 * @param {*} name 
 * @param {*} dest 
 */
const addComponentAction = async (name, dest) => {
  // 1. 有对应的ejs模板
  // 2. 编译ejs模板 -> result
  const result = await compile('component.vue.ejs', createData(name));
  // 3. 将result写入到 .vue 文件中，并放到对应的文件夹中
  const filePath = path.resolve(dest, `${name}.vue`);
  writeToFile(filePath, result)
}

const addPageAndRouterAction = async (name, dest) => {
  const pageResult = await compile('component.vue.ejs', createData(name));
  const routerResult = await compile('vue-router.js.ejs', createData(name));
  const targetDest = path.resolve(dest, name.toLowerCase());
  if (mkdirToSync(targetDest)) {
    const pagePath = path.resolve(targetDest, `${name}.vue`);
    const routerPath = path.resolve(targetDest, 'router.js');
    writeToFile(pagePath, pageResult);
    writeToFile(routerPath, routerResult);
  }
}
const addStoreAndTypeAction = async (name, dest) => {
  const storeResult = await compile('vue-store.js.ejs', {});
  const typeResult = await compile('vue-types.js.ejs', {});
  const targetDest = path.resolve(dest, name.toLowerCase());
  if (mkdirToSync(targetDest)) {
    const storePath = path.resolve(targetDest, `${name}.js`);
    const typePath = path.resolve(targetDest, 'types.js');
    writeToFile(storePath, storeResult);
    writeToFile(typePath, typeResult);
  }
}

module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAndRouterAction,
  addStoreAndTypeAction
}