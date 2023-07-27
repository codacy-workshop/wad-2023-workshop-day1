function generateFunctions() {
    const functions = [];

    for (let i = 0; i < 3; i++) {
        functions.push(function () {
            console.log("Function " + i + " was called.");
        });
    }

    return functions;
}

const myFunctions = generateFunctions();

// Call the generated functions
myFunctions[0]();
myFunctions[1]();
myFunctions[2]();
