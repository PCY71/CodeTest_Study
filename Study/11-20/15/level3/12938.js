/* 12938번 문제
최고의 집합*/


function solution(n, s) {
    if (n > s) return [-1];
    const div = Math.floor(s / n);
    const answer = new Array(n).fill(div);

    for (let i = 0; i < s % n; i++) {
        answer[answer.length - 1 - i]++;
    }

    return answer;
}

console.log(solution(2, 9));
console.log(solution(2, 1));
console.log(solution(2, 8));