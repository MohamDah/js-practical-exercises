
class MyArray {
    constructor(arr) {
        this.arr = arr
    }

    myMap(func) {
        const newArr = [];

        for (let i of this.arr) {
            newArr.push(func(i));
        }
        return newArr;
    }

    myFilter(func) {
        const newArr = [];

        for (let i of this.arr) {
            if (func(i)) {
                newArr.push(i);
            }
        }
        return newArr;
    }

    myReduce(func, init = null) {
        let total = init;

        for (let i of this.arr) {
            if (total === null) {
                total = 0;
            } else {
                total = func(total, i);
            }
        }
        return total;
    }

    myForEach(func) {
        for (let i of this.arr) {
            func(i);
        }
    }
}
