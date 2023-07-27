
function createNumberFunctions() { 
  var nums = [];

  for (let i = 0; i < nums.length; i++) {
    j++;
    nums[i] = i + j;
  }

  return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));