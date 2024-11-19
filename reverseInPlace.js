function reverseInPlace(str) {
    return str.split(" ").map(i => i.split("").reverse().join("")).join(" ");
}

console.log(reverseInPlace("I am the good boy"));
