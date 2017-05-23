var fs = require('fs');

// fs.readFile('./fs.js', function(err, text) {
//   if (err) throw err;
//   console.log(text.toString());
// });

// fs.writeFile('./target/message.txt', 'Hello Node.js', err => {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });

// fs.mkdir('./helloDir', 0777, function(err) {
//   if (err) throw err;
// });

// fs.readdir(process.cwd(), function(err, files) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   files.forEach(function(filename) {
//     console.log(filename);
//   });
// });

// fs.readdir('./', function(err, files) {
//   if (err) throw err;
//   files.forEach(function(file) {
//     fs.stat('./' + file, function(err, stats) {
//       if (err) throw err;
//       if (stats.isFile()) {
//         console.log("%s is file", file);
//       } else if (stats.isDirectory()) {
//         console.log("%s is a directory", file);
//       }
//       console.log('stats:  %s', JSON.stringify(stats));
//     });
//   });
// });

// fs.watchFile('./target/message.txt', function(curr, prev) {
//   console.log('the current mtime is: ' + curr.mtime);
//   console.log('the previous mtime was: ' + prev.mtime);
// });


// function readLines(input, func) {
//   var remaining = '';
//   input.on('data', function(data) {
//     remaining += data;
//     var index = remaining.indexOf('\n');
//     var last = 0;
//     while (index > -1) {
//       var line = remaining.substring(last, index);
//       last = index + 1;
//       func(line);
//       index = remaining.indexOf('\n', last);
//     }
//     remaining = remaining.substring(last);
//   });
//   input.on('end', function() {
//     if (remaining.length > 0) {
//       func(remaining);
//     }
//   });
// }
// function func(data) {
//   console.log('Line: ' + data);
// }
// var input = fs.createReadStream('./target/message.txt');
// readLines(input, func);

function fileCopy(filename1, filename2, done) {
  var input = fs.createReadStream(filename1);
  var output = fs.createWriteStream(filename2);

  input.on('data', function (d) { output.write(d); });
  input.on('error', function (err) { throw err; });
  input.on('end', function () {
    output.end();
    if (done) done();
  });
}


fileCopy('./target/message.txt', './target/target.txt');