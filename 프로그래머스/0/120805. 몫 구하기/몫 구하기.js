function solution(num1, num2) {
  var answer = 0;
  var a = num1 / num2;

  answer = Math.floor(a);
  return answer;
}

console.log(solution(10, 5));