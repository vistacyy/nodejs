var EventEmitter = require('events').EventEmitter;

// var emitter = new EventEmitter();
// emitter.on('someEvent', function() {
//   console.log('event has occured');
// });
// function f() {
//   console.log('start');
//   emitter.emit('someEvent');
//   console.log('end');
// }
// f()

function Dog(name) {
  this.name = name;
}

Dog.prototype.__proto__ = EventEmitter.prototype;

var simon = new Dog('simon');

simon.on('bark', function() {
  console.log(this.name + ' barked');
});

setTimeout(function() {
  simon.emit('bark');
}, 1000);