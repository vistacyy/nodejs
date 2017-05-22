var fs = require('fs');

// fs.readFile('./fs.js', function(err, text) {
//   if (err) throw err;
//   console.log(text.toString());
// });

// fs.writeFile('message.txt', 'Hello Node.js', err => {
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

fs.readdir('/etc/', function(err, files) {
  if (err) throw err;

  files.forEach(function(file) {
    fs.stat('/etc/' + file, function(err, stats) {
      if (err) throw err;

      if (stats.isFile()) {
        console.log("%s is file", file);
      } else if (stats.isDirectory()) {
        console.log("%s is a directory", file);
      }
      console.log('stats:  %s', JSON.stringify(stats));
    });
  });
});