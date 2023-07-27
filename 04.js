function sum(i, j) {
    return i + j;
};

function createNumberFunctions() { 
    var nums = [];

    for (var i = 0; i < 10; i++) {
        nums[i] = sum(i,j);
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));
