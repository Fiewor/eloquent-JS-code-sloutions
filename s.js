// attempt to redo everything + more

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
//     let last = array[array.length - 1 - i];
//     let first = array[i];
//      for (var i = 0; i < last; i++) {
//         array[i] = last;
//         last = first;
//     }
//     return array;
// }
// console.log(reverseArrayInPlace(["freeCodeCamp", 1, 6, false, "azure", "error"]));

// reversing a string (using Morgan James' idea)
// function reverseString(str) {
//     str = str.split("");
//     let start = 0;
//     let end = str.length - 1;
//     let temporary;
//     while (start < end) {
//       temporary = str[start];
//       str[start] = str[end];
//       str[end] = temporary;
//       start++;
//       end--;
//     }
//     str = str.join(""); 
//     console.log((str));
//   }
//   reverseString("Greetings from Earth");

// factorial
// function factorialize(num) {
//   let result = 1;
//   for (var i = 1; i <= num; i++) {
//    result = result * i;
//   }
//   return result;
// }
// console.log(factorialize(5));

// recursive version of factorial
// function factorialize(num) {
//   if (num == 1) {
//     return num;
//   } else {
//     return num * factorialize(num - 1);
//   }
// }
// console.log(factorialize(5));

// find the longest word in a string
// function longestWord(str) {
//   let words = str.split(" ");
//   for (let i = 0; i < words.length - 1; i++) {
//     let next = i + 1;
//     if (words[i].length < words[next].length) {
//       if (words[next].length > words[next + 1].length) {
//         return words[next].length;
//       } else {
//         return words[next + 1].length;
//       }
      // next++;
//     } else {
//       words[i].length;
//     }
//   }
// }
// console.log(longestWord("The quick brown fox jumped over the tall black picket fence"));
// function longestWord(str) {
//   let words = str.split(" ");
//   for (let word of words) {
//     if (word.length < word.length) {
//       console.log(word);
//     } else {
//       longestWord(words);
//     }
//   }
  // words.forEach(element => {
  //   console.log(element);
  // });
// }
// console.log(longestWord("The quick brown fox jumped over the tall black picket fence"));

// return largest numbers of each array
// function largeNumbers(array) {

// }
// check if a string ends with target character

// repeat a string a specified number of times

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

// function greaterThan(n) {
//     return m=> m > n;
// }
// let greaterThan10 = greaterThan(10);
// console.log(greaterThan10(11));

//for...of loop
// filter
// const words = ['john', 'jonathan', 'jane', 'jamesons'];
// const result = words.filter(word => word.length < 6);
// console.log(result);

// how the filter method works under the hood
// it is a pure function which doesn't modify the given array,
// but instead builds up a new array with elements that pass the test

// function filter(array, test) {
//     let passed = [];
//     for (let element of array) {
//         if (test(element)) {
//             passed.push(element);
//         }
//     }
//     return passed;
// }
// console.log(filter(words, word => word.length < 6));

// map - TRANSFORMS an array by applying a function to all
// of its elements and building a new array from the returned values.
// the new array has the same length as the input array,
// but its content will have been mapped to a new form by the function
// function map(array, transform){
//   let mapped = [];
//   for (element of array) {
//     mapped.push(transform(element));
//   }
//   return mapped;
// }
// SUMMARIZE with reduce
// reduce(sometimes called fold) - builds a value by repeatedly taking a single element from the array
// and combining it with the current value
// parameters to .reduce() are array, a combining function and a start value
// function reduce(array, combine, start) {
//   let current = start;
//   for (let element of array) {
//     current = combine(current, element);
//   }
//   return current;
// }

// flatten an array of arrays into a single array
// flatten = (array) => {
//   array.reduce((a, b) => a.concat(b));
// }
// console.log(flatten([[1, 2, 3], ["one, two", "three"], [4, "cinq", false]]));

// my own loop
// myloop = (value) => {
//   let currentValue = 0;
//   return (currentValue < value);
//   currentValue++;
    // return true;
    // stop if the above function returns false

//   return false;
//   (currentValue) => return currentValue;
//   return (currentValue) => return currentValue = "some new value";
// }

// let arr1 = ["an", "array"];
// let arr2 =[1, false];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);

  // /regex/.test('string'); - returns a boolean (i.e. true or false)
  // 'string'.match(/regex/); - retrieves the result of matching a string against a regex

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`HAHAHA, I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard('Shelly', 'Healer');
 