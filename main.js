/*
# **POD Day 3 - Regular - LargestAndSmallest -** 

The function `largestAndSmallest` should take one parameter, an array, 
and return a new array containing the largest and smallest elements
 from the original array.
*/

function largestAndSmallest(array) {
    const newArray = [];
    const arrayMin = Math.min(...array);
    const arrayMax = Math.max(...array);

    newArray.push(arrayMin, arrayMax);
    console.log(newArray)
}

console.log(largestAndSmallest([1, 2, 3, 4, 5])); // should log [1, 5]
console.log(largestAndSmallest([90, 30, 44, 66, 10])); // should log [10, 90]
console.log(largestAndSmallest([16, -70, 122])); // should log [-70, 122]


/*
# **POD Day 3 - Advanced -**  Reverse Number

The function `reverseNumber` should take one parameter, 
a number, it should reverse the number and return it.
*/

function reverseNumber(num) {
    const reversedNum = parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
    return reversedNum;
}

console.log(reverseNumber(456)); // should log 654
console.log(reverseNumber(1000)); // should log 1
console.log(reverseNumber(-789)); // should log -987