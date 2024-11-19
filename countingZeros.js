function countingZeros(n) {
    let total = 0;
    for (let i = 10; i <= n; i+=10){
        total += i.toString().split("").reduce((t,i) => i==="0" ? t+1 : t, 0)
    }
    
    return total;
}
