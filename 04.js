
function createNumberFunctions() { 
    var nums = [];

    for (var i = 0; i < 10; i++) {
        nums[i] = j => i + j;
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));
