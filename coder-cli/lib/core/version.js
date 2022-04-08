/**
 * @description 扩展指令版本管理
 */
const program = require('commander');
const versionOptions = () => {
  // 当前版本号
  const versionInfo = '当前coder-cli脚手架版本为：' + require('../../package.json').version;
  // 支持小写查看版本号
  const lowerCaseCommand = '-v --version';
  program.version(versionInfo, lowerCaseCommand, '当前脚手架版本号');
}
module.exports = {
  versionOptions
}