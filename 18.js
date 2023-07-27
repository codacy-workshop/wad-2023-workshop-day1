function getFunction(i) {
    return function () {
        console.log("Function " + i + " was called.");
    }
};

function generateFunctions() {
    var functions = [];

    for (var i = 0; i < 3; i++) {
        functions.push(getFunction(i))
    }

    return functions;
}

var myFunctions = generateFunctions();

// Call the generated functions
myFunctions[0]();
myFunctions[1]();
myFunctions[2]();