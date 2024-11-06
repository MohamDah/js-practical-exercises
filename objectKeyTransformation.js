
function transformKeys(obj, func) {
    let newObj = {}

    for (let i of Object.keys(obj)) {
        newObj[func(i)] = obj[i];
    }

    return newObj;
}
