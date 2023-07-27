function generateFunctions() {
    var functions = [];

    for (var i = 0; i < 3; i++) {
        // Using an IIFE (Immediately Invoked Function Expression) to create a closure
        (function (index) {
            functions.push(function () {
                console.log("Function " + index + " was called.");
            });
        })(i);
    }

    return functions;
}

var myFunctions = generateFunctions();

// Call the generated functions
myFunctions[0]();
myFunctions[1]();
myFunctions[2]();
