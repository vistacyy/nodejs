let child_process = require('child_process');

// const ls = child_process.spawn('ls', ['-lh', '/usr']);
// const ls = child_process.spawn('cmd.exe', ['/c', 'dir']);
// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });
// ls.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });
// ls.on('close', (code) => {
//   console.log(`子进程退出码：${code}`);
// });

// child_process.exec('dir', function(error, stdout, stderr) {
//   if (error) {
//     console.log(error.stack);
//     console.log('Error code: ' + error.code);
//   }
//   console.log('Child Process STDOUT: ' + stdout);
// });

let n = child_process.fork('./child.js');
n.on('message', function(m) {
  console.log('PARENT got message:', m);
});
n.send({ hello: 'world' });