// reverse an array in place
// let newArr = [];
// function reverseArray(array) {
//     for(let i = 1; i <= array.length; i++) {
//         lastItem = array[array.length - i];
//         newArr.push(lastItem);
//     }
//     return newArr;
// }
// console.log(reverseArray(["freeCodeCamp", 1, 6, false, "azure", "error"]));

// reverse an array in place
function reverseArrayInPlace(array) {
    let last, first, temporary;
    let end = array.length - 1
    for (let i = 0; i < end; i++) {
        last = array[end];
        first = array[i];
        temporary = first;
        first = last;
        last = temporary;
        end--
    }
    return array;
}
console.log(reverseArrayInPlace(["freeCodeCamp", 1, 6, false, "azure", "error"]))
// doesn't work?

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