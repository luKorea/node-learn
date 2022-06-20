const {
  createReadStream,
  createWriteStream,
  readFile,
  writeFile
} = require('fs');

// 传统方式
// readFile('./demo.txt', (err, data) => {
//   if(!err) {
//     writeFile('./test.txt', data, () => {
//       console.log('写入成功');
//     })
//   }
// })

// pipe方式
const readStream = createReadStream('./info.txt');
const writeStream = createWriteStream('./test.txt');

readStream.pipe(writeStream);