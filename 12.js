function bubbleSort(arr) {
    let swapped;
    let len = arr.length;

    let temp;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if ((arr[i] > arr[i + 1]) && (temp = arr[i])) {
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        len--;
    } while (swapped);
  
    return arr;
  }
  
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  const sortedArray = bubbleSort(unsortedArray);
  
  console.log("Sorted array:", sortedArray);