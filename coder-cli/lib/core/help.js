/**
 * @description 扩展指令描述文件
 */
const program = require('commander');
const otherOptions = () => {
  program.option('-s --src <src>', '资源文件夹');
  program.option('-d --dest <dest>', '输出目标文件夹，例如：-d src/pages, 错误写法 /src/pages');
  program.option('-f --framework <framework>', '您的框架名称，例如： vue, react');
  program.on('--help', function () {
    console.log("");
    console.log("usage");
    console.log("   korea -v");
    console.log("   korea -version");
  })
}
module.exports = {
  otherOptions
}