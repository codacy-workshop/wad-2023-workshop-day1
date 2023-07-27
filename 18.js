function generateFunctions() {
    var functions = [];

    for (var i = 0; i < 3; i++) {
        const ii = i;
        functions.push(function () {
            console.log("Function " + ii + " was called.");
        });
    }

    return functions;
}

var myFunctions = generateFunctions();

// Call the generated functions
myFunctions[0]();
myFunctions[1]();
myFunctions[2]();