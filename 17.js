function functionA() {
    console.log("Function A called.");
}

function functionB() {
    console.log("Function B called.");
}

function functionChecker(funcA, funcB) {
    if (typeof funcA == "funcion" && typeof funcB == "function") {
        console.log("Both are functions");
    } else {
        console.log("One object is not a function");
    }
}

functionChecker(functionA, functionB)
