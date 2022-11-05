/* 12923번 문제
숫자 블록*/

const findMaxDiv = (num) => {
    if (num === 1) return 0;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return num / i;
    }
    return 1;
}

function solution(begin, end) {
    let answer = [];
    for (let i = begin; i <= end; i++) {
        answer.push(findMaxDiv(i));
    }
    return answer;
}

console.log(solution(1, 10));