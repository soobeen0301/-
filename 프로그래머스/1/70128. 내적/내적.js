function solution(a, b) {
    var answer = 0;
    for (let i in a) {
        answer += a[i] * b[i]; 
    }
    return answer;
}

console.log(solution([1,2,3,4],[-3,-1,0,2]));
console.log(solution([-1,0,1],[1,0,-1]));