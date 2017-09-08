//The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, idx, arr) {
    if (element === "Waldo") {
      found(idx); // execute callback
    }
  });
}

function actionWhenFound(idx) {
  console.log("Found Waldo at index " + idx + "!");
}

findWaldo(
  ["Alice", "Bob", "Waldo", "Winston"],
  actionWhenFound
);
