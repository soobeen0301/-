function solution(a, b, n) {
  var answer = 0;

  while (a <= n) {
    const coke = Math.floor(n / a) * b;
    answer = answer + coke;
    n = (n % a) + coke;
  }
  return answer;
}