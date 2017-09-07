var words = ["ground", "control", "to", "major", "tom"];

var lengths = map(words, function (word) {
  return word.length;
});
console.log(lengths);

var upper = map(words, function (word) {
  return word.toUpperCase();
});
console.log(upper);

var reverse = map(words, function (word) {
  return word.split('').reverse().join('');
});
console.log(reverse);

function map(arr, cb) {
  var newArr = [];
  arr.forEach(function (element) {
    newArr.push(cb(element));
  });
  return newArr;
}