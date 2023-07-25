/*
Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

*/


const ar = [3, 5, 2, 5, 3, 3, 1, 4, 5]
const mostFreqNum = arr => {
    let totalInArr = {};
    let mostFreqEl = 0;
    arr.map(num => {
        if (totalInArr[num]) totalInArr[num]++
        else totalInArr[num] = 1
    })

    Object.values(totalInArr).map((e, i) => {
        if (e > mostFreqEl) {
            mostFreqEl = e
        }
    })


    return mostFreqEl;

}
console.log(mostFreqNum(ar));
