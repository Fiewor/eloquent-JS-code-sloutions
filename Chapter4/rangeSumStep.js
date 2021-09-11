// initial old wrong code
// function range(start, end) {
//     let array = [];
//     for (counter = 0; counter <= array.length; counter++) {
//         array.push(counter);
//     }
//     return array;
// }
// console.log(range(1, 10));

// range = (start, end) => {
//     let arr = [];
//     for(let i = start; i <= end; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
// // console.log(range(1, 10))
// let counter = 0;
// sum = (arr) => {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(`Initial counter value: ${counter}`)
//         counter += arr[i];
//         console.log(`Counter value after adding ${arr[i]}: ${counter}`)
//     }
//     return counter;
// }
// console.log(sum(range(1, 5)));

let arr = [];
function rangeModified (start, end, step) {
    if (start < end) {
        countUp(start, end, step, arr);
    } else {
        countDown(start, end, step, arr);
    }
    return arr;
}
function countUp (start, end, step, arr) {
    for(let i = start; i <= end; i+=step) {
        if (!step) {
            step = 1;
        }
        arr.push(i);
    }
    return arr;
}
function countDown (start, end, step, arr) {
    for(let i = start; i >= end; i+=step) {
        if (!step) {
            step = -1;
        }
        arr.push(i);
    }
    return arr;
}
console.log(rangeModified(15, 2, -1));
