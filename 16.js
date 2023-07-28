
function calculateSum(obj) {
  let globalSum = 0;
  for (var elem in obj) {
    if (obj.hasOwnProperty(elem)) { 
      // We are sure that obj[key] belongs to the object and was not inherited.
      globalSum += elem;
    }
  }
}

var data = [10, 20, 30];

calculateSum(data);
console.log(globalSum * elem);