var fs = require('fs');

// process.on('exit', function (code) {

//   // 以下代码永远不会执行
//   setTimeout(function () {
//     console.log("该代码不会执行");
//   }, 0);

//   console.log('退出码为:', code);
// });
// const argv = process.argv.slice(2);
// const execPath = process.execPath;
// const env = process.env;
// console.log("程序执行结束", env);

// fs.createReadStream('./target/target.txt')
//   .pipe(process.stdout);

process.stdin.pipe(process.stdout)