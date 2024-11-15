function createCounter() {
    count = 0;
    return function() {
        count++;
        return count;
    }
}

const counterFn = createCounter();

console.log(counterFn());
console.log(counterFn());
console.log(counterFn());

