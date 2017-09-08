var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(nums, idx, array) {
  var ans = Math.sqrt(
    Math.pow(nums.x, 2) + Math.pow(nums.y, 2)
  );
  return ans;
});

console.log(result);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
