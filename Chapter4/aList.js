// implementing linked list
function arrayToList(array) {
    let list;
    for (let i = array.length - 1; i >= 0; i--) {
        list = `value: ${array[i]},\nrest: { ${list} }`;
    }
    return list;
}
// console.log(arrayToList([1, 2, 3]));

//listToArray
function listToArray(list) {
    let newArray = [];
    // for (let i = 0; i < list.length; i++) {
    //     newArray.push(list[value]);
    // }
    for(let item of list){
        // newArray.push item[value]
        console.log(Object.keys(item))
    }
    return newArray;
    // return arr[3];
}
console.log(listToArray(arrayToList([1, 2, 3])));

// function prepend(element, list) {

// }
// console.log(prepend());

// function nth(list, number) {

// }
// console.log(nth());