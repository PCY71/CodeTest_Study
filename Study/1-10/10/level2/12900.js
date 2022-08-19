/* 12900번 문제
2xn 타일링*/

function solution(n) {
    let answer = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        let cur = answer[i - 1] + answer[i - 2];
        answer[i] = cur % 1000000007
    }
    return answer[n];
}

console.log(solution(4));