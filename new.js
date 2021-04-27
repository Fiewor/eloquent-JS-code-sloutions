const fun = (string) => {
    let num = 0;
    for (let i = 0; i <= string.length; i++) {
        if (string.slice(i, i + 1).toUpperCase() === "B")
            num++;
    }
    console.log(string);
}
console.log(fun("BeaBadoBee"));