let globalSum = 0;

let elem = 2;

function calculateSum(obj) {
  for (elem in obj) {
    globalSum += elem;
  }
}

const data = [10, 20, 30];

calculateSum(data);
console.log(globalSum * elem);
