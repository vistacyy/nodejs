let assert = require('assert');

function add(a, b) {
  return a + b;
}

let expected = add(1, 2);

// assert(expected === 4, '预期1加2等于3');
// assert.equal(expected, 3, '预期1加2等于3');
assert.notEqual(expected, 3, '预期1加2等于3');