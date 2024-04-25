function solution(numbers) {
    var answer = 0;
    
    a = numbers.length;
    for (i = 0; i < a; i++) {
        answer += numbers[i];
    };
    answer = answer/a;
    
    return answer;
}