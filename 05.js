function createCounter() {
    function increment() {
        count++;
    }

    function getCount() {
        return count;
    }

    return { increment, getCount };
}

let count; 
const counter = createCounter();

console.log("Current count:", counter.getCount());

counter.increment();
console.log("Current count:", counter.getCount());
