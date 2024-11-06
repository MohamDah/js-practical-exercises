function validatePhoneNumber(numStr) {
    let isValid = true;
    const arr = numStr.split("")
    const numArr = arr.filter(i => !isNaN(i) && i !== " ")
    
    if (numArr.length !== 10) {
        isValid = false;
    }

    arr.forEach((i, index) => {

        if (isNaN(i)) {
            if (index !== 3 && index !== 7) {
                if (i !== '-' || i !== " "){
                    isValid = false
                }
            }
        }

    })

    return isValid
}
