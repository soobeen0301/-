function solution(n)
{
    var answer = 0;
    var a = String(n);

    for ( var i = 0; i < a.length; i++) {
        answer += Number(a[i]);
    }

    return answer;
}
const test = 123;
console.log(solution(test));