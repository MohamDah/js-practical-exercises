function arrayStats(arr) {
    let sum = 0;
    for (i of arr) {
        sum += i
    }

    const average = (sum / arr.length).toFixed(2);

    const [min, max] = [Math.min(...arr), Math.max(...arr)];

    return {
        sum,
        average,
        min,
        max
    }
}
