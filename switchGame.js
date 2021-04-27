function moveCommand(direction) {
    switch (direction) {
        case "forward":
            whatHappens = "you ecounter a monster";
            break;
        case "back":
            whatHappens = "you fell into a ditch";
            break;
        case "right":
            whatHappens = "you have to engage in a rap-battle";
            break;
        case "left":
            whatHappens = "you die";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

window.moveCommand("forward");