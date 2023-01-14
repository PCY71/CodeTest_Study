/*147354번 문제
테이블 해시 함수*/

function solution(data, col, row_begin, row_end) {
    let answer = 0;

    data.sort((a, b) => {
        if (a[col - 1] - b[col - 1] < 0) return -1;
        if (a[col - 1] - b[col - 1] > 0) return 1;
        return b[0] - a[0];
    });

    for (let i = row_begin; i <= row_end; i++) {
        answer ^= data[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
    }
    return answer;
}

console.log(solution([[2, 2, 6], [1, 5, 10], [4, 2, 9], [3, 8, 3]], 2, 2, 3));