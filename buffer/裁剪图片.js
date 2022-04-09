const sharp = require('sharp'); // 裁剪图片
sharp('./demo.jpeg')
  .resize(100, 100) // 裁剪大小
  .toFile('./sharp.jpeg'); // 写入文件