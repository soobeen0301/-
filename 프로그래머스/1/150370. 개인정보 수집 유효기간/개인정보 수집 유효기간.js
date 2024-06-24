function solution(today, terms, privacies) {
    var answer = [];
    //today Date 형식으로 바꿔주기
    const day = new Date(today)
    //terms 객체화
    const termType ={};
    terms.forEach( (item) => {
        const [type, term] = item.split(" ");
        
        termType[type] = Number(term);
    });
    
    //개인정보 수집일자 확인
    privacies.forEach( (item, index) => {
        const [date, type] = item.split(" ");
        
        //찾은 date Date 형식으로 바꿔주기
        const newDay = new Date(date);
        
        //newDay 달 + type 기간 
        newDay.setMonth(newDay.getMonth() + termType[type]);
        
        //오늘 날짜랑 찾은 유효기간 비교
        if (newDay <= day) {
            answer.push(index + 1);
        };
    });
    return answer;
}