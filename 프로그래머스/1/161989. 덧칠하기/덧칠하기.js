function solution(n, m, sections) {
    var answer = 0;
    let paint = 0;
    
    for (let section of sections) {
        if (paint < section) {
            answer++;
            paint = section + m - 1;
        }
    }
    return answer;
}