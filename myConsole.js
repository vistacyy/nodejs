'use strict';

// 用一个新的不带补丁的 assert 实现来创建一个简单的 console 扩展。
const myConsole = Object.create(console, {
  assert: {
    value: function assert(assertion, message, ...args) {
      try {
        console.assert(assertion, message, ...args);
      } catch (err) {
        console.error(err.stack);
      }
    },
    configurable: true,
    enumerable: true,
    writable: true,
  },
});

module.exports = myConsole;