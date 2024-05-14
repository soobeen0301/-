function solution(phone_number) {
    var answer = '';
    let len = phone_number.length;

    for (let i = 0; i < len- 4; i++) {
        answer += phone_number[i].replace(phone_number[i],'*');
    }
    return answer + phone_number.substring(len - 4, len);
}

console.log(solution('01033334444'));