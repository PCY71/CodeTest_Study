/*12933 문제
상담원 인원*/

function solution(n) {
    const arr = n.toString().split('').map((el) => Number(el)).sort((a, b) => a - b);
    let answer = ''
    while (arr.length > 0) {
        answer += arr.pop();
    }

    return Number(answer);
}

console.log(solution(118372));