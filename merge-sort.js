function mergeSort(array) {
    // When theres only one element in the array then there is no need to halve anymore.
    if (array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);

    // Separates the two sides of the array into two variables.
    let left = array.splice(0, middle);
    let right = array;

    // Call the merge function, while recursively calling mergeSort
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let sorted = [];
    // While there still is elements inside the left and right array, continue to compare them
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }

    // Once both arrays are sorted, we return the sorted array.
    return [...sorted, ...left, ...right];
}

console.log(mergeSort([61, 5, 3]));
