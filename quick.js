/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    // Helper function to swap array elements
    function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // Assume the pivot is the first element
    const pivotValue = arr[start];
    let pivotIndex = start;

    // Iterate through the array from start to end
    for (let i = start + 1; i <= end; i++) {
        // If the current element is less than the pivot, move pivotIndex to the right
        if (arr[i] < pivotValue) {
            pivotIndex++;
            swap(arr, pivotIndex, i);
        }
    }

    // Swap the pivot element with the element at pivotIndex
    swap(arr, start, pivotIndex);

    // Return the index where the pivot value is now located
    return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // Call pivot to get the index where the pivot value is placed
        const pivotIndex = pivot(arr, left, right);

        // Recursively call quickSort on the left and right halves
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

module.exports = quickSort;