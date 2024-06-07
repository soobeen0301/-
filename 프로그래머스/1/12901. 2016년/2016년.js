function solution(a, b) {
    var answer = '';
    let weekend = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let dateStr = "2016-" + a + "-" + b;
    let date = new Date(dateStr);
    
    return weekend[date.getDay()];
}