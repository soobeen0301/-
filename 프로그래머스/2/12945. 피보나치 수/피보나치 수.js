function solution(n) {
    var answer = 0;
    let fibonacci = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        // 오버플로우!!!
        fibonacci [i] = (fibonacci[i-1] + fibonacci[i-2]) % 1234567;
        answer = fibonacci[n];
    }
    return answer;
}