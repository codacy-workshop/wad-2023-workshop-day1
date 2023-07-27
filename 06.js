function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i], 10);
    }
    return sum;
}

const numbers = [1, 2, 3, "0", 0, 5];

console.log("Sum of array elements:", sumArray(numbers));