var nums = [];

function createNumberFunctions() {
    var temp = [];
    for (let i = 0; i < 10; i++) {
        temp[i] = function () {
            return i;
        };
    }

    return temp;
}

const numberFunctions = createNumberFunctions();
console.log(numberFunctions[0](2));