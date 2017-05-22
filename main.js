// var assert = require('assert');
// function add(a, b) {
//   return a + b;
// }
// var expected = add(1, 2);
// assert(expected === 4, '预期1加2等于3');
// assert.equal(expected, 0, '预期1加2等于3');
// assert.notEqual(expected, 3, '预期1加2等于3');

// var bytes = Buffer.alloc(256);
// for (var i = 0; i < bytes.length; i++) {
//   bytes[i] = i;
// }
// var end = bytes.slice(240, 256);
// console.log('end[0]', end[0]);
// end[0] = 23;
// console.log('end[0]', end[0]);

// var more = Buffer.alloc(4);
// bytes.copy(more, 0, 240, 248);
// console.log('more[0]', more[0]);

// var hello = Buffer.alloc(300, 's', 'utf8');
// var hello = Buffer.from('hello', 'utf8');
// var hello = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
// console.log(hello.toString('utf8', 0, 1));
// console.log(hello.toString('hex'));

// var exec = require('child_process').exec;
// exec('help', function(error, stdout, stderr) {
//   if (error) {
//     console.log(error.stack);
//     console.log('Error code: ' + error.code);
//   }
//   console.log('Child Process STDOUT: ' + stdout);
// });

// var child_process = require('child_process');
// var n = child_process.fork('./child.js');
// n.on('message', function(m) {
//   console.log('PARENT got message:', m);
// });
// n.send({ hello: 'world' });

var cluster = require('cluster');
var http = require('http');
if (cluster.isMaster) {
  var numWorkers = require('os').cpus().length;
  console.log('Master cluster setting up ' + numWorkers + ' workers...');
  for (var i = 0; i < numWorkers; i++) {
    cluster.fork();
  }
  cluster.on('online', function(worker) {
    console.log('Worker ' + worker.process.pid + ' is online');
  });
  cluster.on('exit', function(worker, code, signal) {
    console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end("hello world\n");
  }).listen(8000);
}