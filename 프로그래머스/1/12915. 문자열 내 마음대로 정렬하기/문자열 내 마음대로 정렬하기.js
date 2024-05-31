function solution(strings, n) {
  var answer = [];

  //1. 인덱스 1의 문자 맨 앞으로
  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i][n] + strings[i];
  }
  //2. 오름차순 정렬
  strings.sort();
  //3. 앞글자 제거
  for (let j = 0; j < strings.length; j++) {
    strings[j] = strings[j].replace(strings[j][0], "");
    answer.push(strings[j]);
  }
  return answer;
}

console.log(solution(["sun", "bed", "car"], 1));