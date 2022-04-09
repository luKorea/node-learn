const ejs = require('ejs');
const path = require('path');
const fs = require('fs');
// const log = require('./log')

// 编译模板  
const compile = async (name, data) => {
  const templatePosition = `../template/${name}`;
  const templatePath = path.resolve(__dirname, templatePosition);
  try {
    return await ejs.renderFile(templatePath, {
      data
    }, {})
  } catch (err) {
    return err
  }
}
// 文件写入
const writeToFile = (path, content) => {
  return fs.promises.writeFile(path, content);
}

// 创建文件夹
const mkdirToSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    // 不存在,判断父亲文件夹是否存在？
    if (mkdirToSync(path.dirname(dirname))) {
      // 存在父亲文件，就直接新建该文件
      fs.mkdirSync(dirname)
      return true
    }
  }
}

module.exports = {
  compile,
  writeToFile,
  mkdirToSync
}