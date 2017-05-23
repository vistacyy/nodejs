var dns = require('dns');

// dns.lookup('www.bfdsdfjdsadsdlsdkl.com', function onLookup(err, addresses, family) {
//   console.log('addresses:', addresses);
// });

dns.resolve('www.google.com', 'A', function (err, addresses) {
  if (err) throw err;
  console.log('addresses: ' + JSON.stringify(addresses));
  addresses.forEach(function (a) {
    dns.reverse(a, function (err, hostnames) {
      if (err) {
        throw err;
      }
      console.log('reverse for ' + a + ': ' + JSON.stringify(hostnames));
    });
  });
});