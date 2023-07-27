function createNumberFunctions() { 

    var nums = [];
    for (let i = 0; i < 10; i++) {
        nums[i] = function (j) {
            return i + j;
        }.bind(i);
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));