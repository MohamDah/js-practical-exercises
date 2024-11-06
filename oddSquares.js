function oddSquares(arr) {
    const noEvens = arr.filter(i => i % 2 === 1);

    const squaredEvens = noEvens.map(i => i ** 2);

    return squaredEvens;
}

