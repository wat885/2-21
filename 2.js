function findText(char, text) {
    if (text.includes(char)) {
        return 1;
    } else {
        return 0;
    }
}

const text = "Booleans and Conditionals";
console.log(findText("Boo", text)); //1
console.log(findText("s a", text)); //1
console.log(findText("boon", text)); //0
