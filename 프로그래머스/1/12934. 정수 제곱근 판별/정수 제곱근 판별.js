function solution(n) {
    var answer = 0;
    var x = Math.sqrt(n); //n의 제곱근구함

    if (x % 1 !== 0) {
        answer = -1;
    } else {
        answer = Math.pow(x+1,2); // x+1에 2를 제곱한 값 구함
    }
    return answer;
    }

    console.log(solution(121));