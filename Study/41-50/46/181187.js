/*181187 문제
두 원 사이의 정수 쌍*/

function solution(r1, r2) {
    let answer = 0;

    for (let y = r2 - 1; 0 < y; y--) {
        const max_x = Math.floor(Math.sqrt(r2 ** 2 - y ** 2));
        const min_x = y >= r1 ? 1 : Math.ceil(Math.sqrt(r1 ** 2 - y ** 2));
        answer += max_x - min_x + 1;
    }
    answer *= 4;
    answer += (r2 - r1 + 1) * 4

    return answer;
}

console.log(solution(2, 3));