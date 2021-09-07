// reverse an array in place
// let newArr = [];
// function reverseArray(array) {
//     for(let i = 1; i <= array.length; i++) {
//         lastItem = array[array.length - i];
//         newArr.push(lastItem);
//     }
    // return newArr;
//     console.log(newArr);
// }
// console.log(reverseArray(["freeCodeCamp", 1, 6, false, "azure", "error"]));

// reverse an array in place
// function reverseArrayInPlace(array) {
//     let last = array[array.length - 1 - i];
//     let first = array[i];
//      for (var i = 0; i < last; i++) {
//         array[i] = last;
//         last = first;
//     }
    // return array;
//     console.log(array);
// }
// reverseArrayInPlace(["freeCodeCamp", 1, 6, false, "azure", "error"]);
// doesnt work?

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