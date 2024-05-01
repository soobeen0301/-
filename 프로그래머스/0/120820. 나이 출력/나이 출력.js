function solution(age) {
    var answer = 0;
    var year = 2022;

    for (i = 0 ; i <= 120; i ++) {
        answer = year - age +1;
    }
    return answer;
}
let test = (40);
console.log(solution(test));