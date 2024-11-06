function nullableConversion(obj) {
    for (i of Object.keys(obj)) {
        if (obj[i] === null) {
            obj[i] = 0;
        }
        if (obj[i] === undefined) {
            obj[i] = "";
        }
    }

    return obj

}

