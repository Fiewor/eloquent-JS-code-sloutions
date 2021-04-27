let database = [
    {
        username: "Fiewor",
        password: "secret"
    }
];

let newsFeed = [
    {
        user: "Tito",
        status: "omo this life na cruise"
    },
    {
        user: "Pastor",
        status: "Read your bible, pray every day"
    }
];

let usernamePrompt = prompt("What is your username?");
let passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password) {
        return newsFeed;
    } else {
        alert("Wrong sign-in details");
    }
}
console.log(signIn(usernamePrompt, passwordPrompt));