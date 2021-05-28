// function isEven(n) {
//     if (n === 0) {
//         return true;
//     } else if (n === 1) {
//         return false;
//     } else if (n < 0) {
//         return `${n} is less than zero`;
//     } else {
//         return isEven(n - 2);
//     }
// }
// console.log(isEven(-1));

// function countBs(string) {
//     let length =  string.length - 1;
//     let counter = 0;
//     for(let i = 0; i < length; i++) {
//         if (string[i] === "B") {
//             counter += 1;
//         }
//     }
//     return counter;
// }
// console.log(countBs("BeaBadoBee has a Big BumBumBum just like BimBola"));

// let counter = 0;
// function countChar(string, char) {
//     for (let i = 0; i <= string.length - 1; i++) {
//         if (string[i] === char) {
//             counter++;
//         }
//     }
//     return counter;
// }
// console.log(countChar("BeaBadobee", "-"));

// let arr = [];
// range = (start, end) => {
//     for(let i = start; i <= end; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// let counter = 0;
// sum = (arr) => {
//     for(let i = 0; i <= arr.length - 1; i++) {
//         counter += arr[i];
//     }
//     return counter;
// }
// console.log(sum(range(1, 100)));

// let arr = [];
// function rangeModified (start, end, step) {
//     if (start < end) {
//         countUp(start, end, step, arr);
//     } else {
//         countDown(start, end, step, arr);
//     }
//     return arr;
// }
// function countUp (start, end, step, arr) {
//     for(let i = start; i <= end; i+=step) {
//         if (!step) {
//             step = 1;
//         }
//         arr.push(i);
//     }
//     return arr;
// } 
// function countDown (start, end, step, arr) {
//     for(let i = start; i >= end; i+=step) {
//         if (!step) {
//             step = -1;
//         }
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(rangeModified(5, 2, -1));

// reverse an array in place
// let newArr = [];
// function reverseArray(array) {
//     for(let i = 1; i <= array.length; i++) {
//         lastItem = array[array.length - i];
//         newArr.push(lastItem);
//     }
//     return newArr;
// }

// reverse an array in place
// function reverseArrayInPlace(array) {
//      for (let i = 0; i < Math.floor(array.length/2); i++) {
//         let last = array[array.length - 1 - i];
//         let first = array[i];
//         array[i] = last;
//         last = first;
//     }
//     return array;
// }
// console.log(reverseArrayInPlace(["freeCodeCamp", 1, 6, false, "azure", "error"]));

// implementing linked list
// function arrayToList(array) {
//     let list;
//     for (let i = array.length - 1; i >= 0; i--) {
//         list = `value: ` + array[i] + `,\n\trest:{\n` + list + `\n}`;
//     }
//     return list;
// }
// console.log(arrayToList([1, 2, 3]));

//listToArray
// function listToArray(arr) {
    // let array = [];
    // for (let i = 0; i < arr.length; i++) {
    //     array.push(arr.value);
    // }
    // return array;
//     return arr[3];
// }
// console.log(listToArray(arrayToList([1, 2, 3])));

// function prepend(element, list) {

// }
// console.log(prepend());

// function nth(list, number) {

// }
// console.log(nth());

// function deepEqual(value1, value2) {
//     if(value1 !== null && value2 !== null) {
//         if(typeof value1 === typeof value2) {
//             if(Object.keys(value1).length === Object.keys(value2).length) {
//                 return true;
//             }
//             else {
//                 return `They values of the properties of ${value1} and ${value2} are not the same`;
//             }
//         } else {
//             return `${value1} and ${value2} are not of the same datatype`;
//         }
//     } else {
//         return `Either ${value1} or ${value2} is null`;
//     }
// }
// let myObject1 = {
//     john:20,
//     ford:20
// };
// let myObject2 = {
//     john:20,
//     john:20
// };
// console.log(deepEqual(myObject1, myObject2));

// repeat = (n, action) => {
//     for(let i = 0; i < n; i++) {
//         action(i);
//     }
// }
// let labels = [];
// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`);
// });
// console.log(labels);

//for...of loop

//map
//reduce
