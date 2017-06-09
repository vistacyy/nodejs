var dns = require('dns');

// dns.lookup('www.baidu.com', function onLookup(err, addresses, family) {
//   console.log('addresses:', addresses);
// });

// dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
//   console.log(hostname, service);
//   // Prints: localhost ssh
// });

// dns.resolve4('baidu.com', (err, addresses) => {
//   if (err) throw err;

//   console.log(`addresses: ${JSON.stringify(addresses)}`);

//   addresses.forEach((a) => {
//     dns.reverse(a, (err, hostnames) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
//     });
//   });

// });