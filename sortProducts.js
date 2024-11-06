function sortProducts(arr) {
    const sortedArr = arr.sort((a, b) => a.price - b.price)

    return sortedArr
}
