// 英文
const messageToEnglish = 'korea';
// 16进制存储 0-15 0-15 0-f 0-f 00 ff 1个byte-> 8bit
const enBuffer = Buffer.from(messageToEnglish);
console.log(enBuffer);
// 中文
const messageToChinese = '韩国';
// 存储的是对应的Unicode，一个中文是三个byte
const zhBuffer = Buffer.from(messageToChinese);
console.log(zhBuffer);

// alloc 创建，分配内存大小
const allocBuffer = Buffer.alloc(8);
console.log(allocBuffer);
allocBuffer[1] = 0x88;
console.log(allocBuffer);