function createCounter() {
    let count = 0; // Declare count using let to restrict its scope to the createCounter function

    function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return { increment, getCount };
}

const counter = createCounter();

// The following lines will cause errors since 'count' is not accessible in the global scope anymore
// count ++;
// console.log("Current count:", counter.getCount());

counter.increment();
console.log("Current count:", counter.getCount());
