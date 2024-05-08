function solution(x) {
    var sum = 0;
    var a = String(x).split("");

    for (let i = 0; i < a.length; i++) {
        sum = sum+Number(a[i]);
    }
    return (x % sum === 0) ? true : false;
}