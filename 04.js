var nums = [];

function createNumberFunctions() {
    for (var i = 0; i < 10; i++) {
        const ii = i;
        nums[i] = function (j) {
            return ii + j;
        };
    }

    return nums;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));