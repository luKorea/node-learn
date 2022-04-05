/*
 * @Date: 2022-04-04 22:11:45
 * @LastEditors: korea
 * @LastEditTime: 2022-04-05 21:08:33
 * @FilePath: /node-learn/基础参数/index.js
 */
let nodeAddress = process.argv[0]; // node环境路径
let fileAddress = process.argv[1]; // 当前文件路径
let orderAgreement = process.argv; // 用户输入的参数
console.log(nodeAddress, fileAddress, orderAgreement)