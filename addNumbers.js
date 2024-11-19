function addNumbers(str) {
    return Function("return " + str)();
}


// console.log(addNumbers("(5+5) / 5"))