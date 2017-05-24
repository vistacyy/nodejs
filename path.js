var path = require('path');
// var path1 = path.join('mydir', "foo");
// var path1 = path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile');
console.log('path1', path1);
var myFilePath = '/someDir/someFile.json';
path.parse(myFilePath).base
// "someFile.json"
path.parse(myFilePath).name
// "someFile"
path.parse(myFilePath).ext
// ".json"