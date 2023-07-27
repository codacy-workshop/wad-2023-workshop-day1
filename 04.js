const nums = [];

function createNumberFunctions() {
    var nums = []; for (var i = 0; i < 10; i++) { (function (i) { nums[i] = function (j) { return i + j; }; }(i)); } return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));
