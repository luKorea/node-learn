/*
 * @Date: 2022-04-05 20:32:00
 * @LastEditors: korea
 * @LastEditTime: 2022-04-05 21:06:15
 * @FilePath: /node-learn/基础参数/内置模块/递归获取文件/index.js
 */
const fs = require('fs');
const path = require('path');

const dirname = './demo'

/**
 * @name: recursion
 * @msg: 递归查找文件
 * @param {*} dirname
 * @return {*}
 */

function recursion(dirname) {
  fs.readdir(dirname, {withFileTypes: true}, (err, files) => {
    try {
      files.map(file => {
        if (file.isDirectory()) {
          const filepath = path.resolve(dirname, file.name);
          recursion(filepath)
        } else console.log(file.name);
      })
    } catch {
      console.log('错误信息', err);
    }
  })
}

recursion(dirname)
console.log('first')