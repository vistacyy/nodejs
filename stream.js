var fs = require("fs");
var stream = require('stream');

// var data = '';
// // 创建可读流
// var readerStream = fs.createReadStream('./target/message.txt');
// // 设置编码为 utf8。
// readerStream.setEncoding('UTF8');
// // 处理流事件 --> data, end, and error
// readerStream.on('data', function (chunk) {
//   data += chunk;
// });
// readerStream.on('end', function () {
//   console.log(data);
// });
// readerStream.on('error', function (err) {
//   console.log(err.stack);
// });
// console.log("程序执行完毕");


// var data = '菜鸟教程官网地址：www.runoob.com';
// // 创建一个可以写入的流，写入到文件
// var writerStream = fs.createWriteStream('./target/target.txt');
// // 使用 utf8 编码写入数据
// writerStream.write(data, 'UTF8');
// // 标记文件末尾
// writerStream.end();
// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function () {
//   console.log("写入完成。");
// });
// writerStream.on('error', function (err) {
//   console.log(err.stack);
// });
// console.log("程序执行完毕");


// // 创建一个可读流
// var readerStream = fs.createReadStream('./target/message.txt');
// // 创建一个可写流
// var writerStream = fs.createWriteStream('./target/target.txt');
// // 管道读写操作
// // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// readerStream.pipe(writerStream);
// console.log("程序执行完毕");

var rs = new stream.Readable();

// rs.push('beep ');
// rs.push('boop\n');
// rs.push(null);
// rs.pipe(process.stdout);

// var c = 97;
// rs._read = function () {
//   rs.push(String.fromCharCode(c++));
//   if (c > 'z'.charCodeAt(0)) {
//     rs.push('\n');
//     rs.push(null);
//   }
// };
// rs.pipe(process.stdout);

process.stdin.on('readable', function () {
  var buf = process.stdin.read();
  console.dir(buf && buf.toString());
});