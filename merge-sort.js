// Sort the left half
// Sort the right half
// Merge the left and right half

// Merge Sort

// Base case - If the array is <= 1 then no need to slice the array in half
// Otherwise
// Get the middle index by getting the length of the array and divide it by two
// Using the middle index, slice the array in to two parts

// Now we sort the left and right half by calling another function that accepts the left and right half
// array

// We create a new array to store the sorted halves

// While the left and right half still contain elements, compare the first elements of the left
// and right array and push whichever one is lesser than the other one, instead of appending
// left[0] and right[0], we can use the .shift() function to remove the first element of the
// given half so when we loop back later we can just compare the first elements again.
// Then we return the array and we add the left and right half with it as well.

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    console.log(left, right);
}

mergeSort([1, 2, 3, 5]);
