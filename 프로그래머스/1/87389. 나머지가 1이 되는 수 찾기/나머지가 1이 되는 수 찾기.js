function solution(n) {
    for (let x = 1 ; x < n; x++){
        if( n%x === 1 ) {
        return x ; 
         }
    }
}
let test = 10;
console.log(solution(test));