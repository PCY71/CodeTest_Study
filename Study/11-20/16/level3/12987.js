/* 72415번 문제
숫자 게임*/

function solution(A, B) {
    let answer = 0;
    const n = A.length;
    let idx = 0;

    A.sort((a, b) => a - b);
    B.sort((a, b) => a - b);

    for (const a of A) {
        while (idx < n && a >= B[idx]) {
            idx++;
        }
        if (idx < n && a < B[idx]) {
            answer++;
            idx++;
        }
    }
    return answer;
}
console.log(solution([5, 1, 3, 7], [2, 2, 6, 8]));
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1]));