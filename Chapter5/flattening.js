// flatten an array of arrays into a single array
flatten = (array) => {
  array.reduce((a, b) => a.concat(b));
}
console.log(flatten([[1, 2, 3], ["one, two", "three"], [4, "cinq", false]]));
// undefined?