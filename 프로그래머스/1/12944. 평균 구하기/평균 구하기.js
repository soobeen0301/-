function solution(arr) {
    let a = 0;

    for (var i = 0; i < arr.length; i++) {
        a += arr[i];
    }
    answer = a / arr.length;
    return answer;
}