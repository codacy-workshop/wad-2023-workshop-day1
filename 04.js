function cica(i, j) {
    return i + j;
};

function createNumberFunctions() {

    var nums = [];
    for (let i = 0; i < 10; i++) {
        nums[i] = cica(i, j)
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));