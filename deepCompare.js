// deep comparison
// code to compare objects by the values of their properties
// INPUT - two values
// OUTPUT - true
    // IF they have same value or same properties
// typeof, Object.keys

// STEPS
// 1. ensure val1 and val2 are not null
// 2. check if val1 and val2 are objects
// 3. use Object.keys to check if properties are the same
// use === to check if values of properties are the same
// how do i access the values of val1 and val2?

deepEqual = (val1, val2) => {
    // check to ensure they're not null
    if (val1 != null && val2 != null) {
        // if they have the same value, return true
        if (Object.keys(val1) === Object.keys(val2)){
            return true
            // check if they are objects
        } else if (typeof val1=="object" && typeof val2=="object"){
            // if they are, iterate through their values (recursively?)
            // deepEqual(val1, val2)
            for (let i = 0; i < val1.length; i++){
                deepEqual(val1[i], val2[i])
            }
            // return true if all their values are strictly equal to each other
        }
        return `${val1} and ${val2} are not objects`
    }
    return `either ${val1} or ${val2} is null`
    // val1[] === val2[]
    // return true
}

// let val1 = {one:1, two:2}
// let val2 = {one:1, two:2}

let val1 = [1, 2]
let val2 = [1, 2]

let result = deepEqual(val1, val2)
console.log(result)