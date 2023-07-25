function secSmallest(arr) {
    if (arr.length == 1) return arr[0]

    let smallest = arr[0];
    let secondSmallest = arr[1];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        }
        if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

const ar = [1, 2, 3, 5];
console.log(secSmallest(ar));