function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

const numbers = [1, 2, 3, "0", 0, 5];

console.log("Sum of array elements:", sumArray(numbers));
