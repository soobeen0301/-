function solution(n, m) {
  var answer = [];
  let a = Math.max(n, m);
  let b = Math.min(n, m);

  for (let i = b; i >= 1; i--) {
    if (a % i == 0 && b % i == 0) {
      return [i, (a * b) / i];
    }
  }
  return answer;
}