let cluster = require('cluster');
let http = require('http');

let num=0;

console.log((num++) +'\n');

if (cluster.isMaster) {
  let numWorkers = require('os').cpus().length;
  console.log('Master cluster setting up ' + numWorkers + ' workers...');

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork();
  }

  cluster.on('online', function (worker) {
    console.log('Worker ' + worker.process.pid + ' is online');
  });

  cluster.on('exit', function (worker, code, signal) {
    console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
    console.log('Starting a new worker');
    cluster.fork();
  });

} else {

  console.log('Worker setting up No.' + (num++) + ' workers...');

  http.createServer(function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
    console.log('Worker #' + cluster.worker.id + ' make a response');
  }).listen(8000);
  
}