const Immutable = require('immutable');

var map1 = Immutable.Map({a: 1, b: 2, c:3})
var map2 = map1.set('a', 100);

console.log(map2)
