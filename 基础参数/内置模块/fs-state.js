/*
 * @Date: 2022-04-05 20:01:43
 * @LastEditors: korea
 * @LastEditTime: 2022-04-05 21:08:23
 * @FilePath: /node-learn/基础参数/内置模块/fs-state.js
 */

const fs = require('fs');
const filepath = './demo.txt';

// 同步执行
const state = fs.statSync(filepath);
console.log(state); 
console.log('object');
//  异步执行
fs.promises.stat(filepath).then((res) => {
  console.log(res);
}).catch(err => console.log(err))
console.log('异步执行');