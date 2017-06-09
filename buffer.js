// let bytes = Buffer.alloc(256);
// for (let i = 0; i < bytes.length; i++) {
//   bytes[i] = i;
// }

// let end = bytes.slice(240, 256);
// console.log('end[0]', end[0]);
// end[0] = 23;
// console.log('end[0]', end[0]);

// let more = Buffer.alloc(4);
// bytes.copy(more, 0, 240, 248);
// console.log('more[0]', more[0]);

// let hello = Buffer.alloc(300, 's', 'utf8');
// let hello = Buffer.from('hello', 'utf8');
let hello = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);
// console.log(hello.toString('utf8', 0, 1));
// console.log(hello.toString('hex'));
console.log(hello.toString());
