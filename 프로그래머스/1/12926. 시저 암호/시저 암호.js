function solution(s, n) {
  var answer = "";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < s.length; i++) {
    let text = s[i];

    if (text == " ") {
      answer = answer + " ";
      continue;
    }

    let arr = upper.includes(text) ? upper : lower;
    let index = arr.indexOf(text) + n;
    if (index >= arr.length) index = index - arr.length;
    answer = answer + arr[index];
  }
  return answer;
}
