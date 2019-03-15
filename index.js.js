const Immutable = require('immutable');

var map1 = Immutable.Map({a: 1, b: 2, c:3});
var map2 = Immutable.Map({d:4, e:5, f:6});
var map3 = map1.merge(map2);
var map4 = map1.delete('c');

var list1 = Immutable.List([1, 2, 3]);

console.log(list1.get(1))
