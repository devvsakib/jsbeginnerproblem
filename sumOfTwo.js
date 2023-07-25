function findTargetedSumArr(sortedArr, target) {
    let result = null;

    sortedArr.map((num, ind) => {
        const int = target - num;
        const intIndex = sortedArr.indexOf(int, ind + 1);

        if (intIndex !== -1) {
            result = [ind, intIndex];
        }
    });

    return result;
}

const ar = [1, 3, 6, 8, 11, 15];
const targetVal = 11;
const result = findTargetedSumArr(ar, targetVal);
console.log(result);