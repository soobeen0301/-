function solution(answers) {
    var answer = [];
    let s1 = [1,2,3,4,5];
    let s2 = [2,1,2,3,2,4,2,5];
    let s3 = [3,3,1,1,2,2,4,4,5,5];
    let countArr = [0,0,0];
    let length1 = s1.length, length2 = s2.length, length3 = s3.length;
    
    for (let i = 0; i < answers.length; i++) {
        if (s1[i%length1] === answers[i]) countArr[0] += 1;
        if (s2[i%length2] === answers[i]) countArr[1] += 1;
        if (s3[i%length3] === answers[i]) countArr[2] += 1;
    }
    let maxVal = Math.max(...countArr);
    
    if (maxVal) {
        countArr.forEach((item, idx) => item === maxVal ? answer.push(idx+1) : '')
    }
    return answer;
}