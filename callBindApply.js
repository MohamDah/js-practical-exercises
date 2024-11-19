function triangleArea(height) {
    return (this * height) / 2;
}

// a.
const triangleAreaOnlyHeight = triangleArea.bind(10);
// console.log(triangleAreaOnlyHeight(5));


// b.
const arr = [34, 12, 57, 28, 91]
const max = Math.max.apply(Math, arr)
// console.log(max)


// c.
function capitalizeFirst() {
    return this[0].toUpperCase() + this.slice(1);
}

const newStr = capitalizeFirst.call("john");
// console.log(newStr);


// d.
function calcDiscount(price) {
    return price - price * this.discount;
}

const discount = calcDiscount.bind({discount: 0.1});
// console.log(discount(50))
// console.log(discount(100))


// e.
function convertRegArr() {
    return Object.assign(new Array, this)
}
// console.log(convertRegArr.apply("arrayLike"));


