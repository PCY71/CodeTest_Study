/* 12919번 문제
서울에서 김서방 찾기*/

function solution(seoul) {
    /*let answer = -1;
    let idx = 0;
    
    while(answer<0){
        if(seoul[idx] === 'Kim') answer = idx;
        idx++;
    }*/

    return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

console.log(solution(["Jane", "Kim"]));