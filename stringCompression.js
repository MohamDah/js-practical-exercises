function compressString(str) {
    const newStr = [];
    let temp = [str[0], 1]
    for (let i of str.split("").slice(1)) {
        if (i !== temp[0]) {
            newStr.push(...temp)
            temp = [i, 1];
        } else (
            temp[1]++
        )
    }
    newStr.push(...temp)

    return newStr.join("")
}
