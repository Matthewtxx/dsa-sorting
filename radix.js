function getDigit(num, place) {
    // Helper function to get the digit at a given place value
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    // Helper function to count the number of digits in a number
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    // Helper function to find the maximum number of digits among all numbers in an array
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    const maxDigits = mostDigits(nums);

    for (let k = 0; k < maxDigits; k++) {
        // Create buckets for each digit (0-9)
        const buckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < nums.length; i++) {
            const digit = getDigit(nums[i], k);
            buckets[digit].push(nums[i]);
        }

        // Concatenate the buckets to form a new array
        nums = [].concat(...buckets);
    }

    return nums;
}

module.exports = radixSort;