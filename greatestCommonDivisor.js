function greatestCD(num1, num2) {
    for (let i=num1; i > 0; i--){
        if (num1 % i === 0 && num2 % i === 0){
            return i;
        }
    }
}

console.log(greatestCD(10, 20));
