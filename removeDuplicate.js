function remDup(arr) {
    const newArr = []
    for (let i of arr) {
        if (!newArr.includes(i)) {
            newArr.push(i);
        }
    }
    return newArr;
}
