var crypto = require('crypto');
var fs = require('fs');

// 哈希 
// var md5=crypto.createHash('sha1');
// var hashMD5=md5.update('foo').digest('hex');
// var hmac=crypto.createHmac('sha1','privateKey');
// var hmacTxt=hmac.update('foo').digest('hex');
// console.log('hashMD5',hashMD5,'\nhmacTxt',hmacTxt);

// 加密、解密
// var text = "123|123123123123123";
// var cipher = crypto.createCipher('aes-256-cbc','InmbuvP6Z8');
// var crypted = cipher.update(text,'utf8','hex');
// crypted += cipher.final('hex');
// var decipher = crypto.createDecipher('aes-256-cbc','InmbuvP6Z8');
// var dec = decipher.update(crypted,'hex','utf8');
// dec += decipher.final('utf8');
// console.log('crypted',crypted,'dec',dec);

// 签名验证
// var data = 'abcdef';
// var privateKey=fs.readFileSync('./resource/server.pem').toString();
// var publicKey = fs.readFileSync('./resource/cert.pem').toString();
// var sign = crypto.createSign('RSA-SHA256');
// sign.update(data);
// var signText = sign.sign(privateKey, 'hex');
// var verify = crypto.createVerify('RSA-SHA256');
// verify.update(data);
// var result=verify.verify(publicKey, signText, 'hex');
// console.log('result',result);

// 迪菲－赫尔曼密钥交换
// var alice = crypto.getDiffieHellman('modp5');
// var bob = crypto.getDiffieHellman('modp5');
// alice.generateKeys();
// bob.generateKeys();
// var alice_secret = alice.computeSecret(bob.getPublicKey(), 'binary', 'hex');
// var bob_secret = bob.computeSecret(alice.getPublicKey(), 'binary', 'hex');
// console.log(alice_secret == bob_secret);