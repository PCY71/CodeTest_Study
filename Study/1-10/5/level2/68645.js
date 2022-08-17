/* 68645번 문제
삼각 달팽이*/

function solution(n) {
    const answer = Array.from(Array(n), (el, idx) => new Array(idx + 1));
    let direction = 0; // 나머지가 0이면 아래, 1이면 오른쪽, 2면 위쪽
    let level = 0;
    let idx = 0;
    for (let i = 1; i <= (Math.pow(n, 2) + n) / 2; i++) {
        if (!answer[level][idx]) answer[level][idx] = i;


        //아래 칸으로 찾아가기
        if (direction % 3 === 0) {
            if (level < n - 1 && !answer[level + 1][idx]) {
                level++;
                continue;
            } else {
                direction++;
            }
        }

        //오른쪽으로 찾아가기
        if (direction % 3 === 1) {
            if (idx + 1 < answer[level].length && !answer[level][idx + 1]) {
                idx++;
                continue;
            } else {
                direction++;
            }
        }

        //위쪽으로 찾아가기
        if (direction % 3 === 2) {
            if (level > 0 && !answer[level - 1][idx - 1]) {
                level--;
                idx--;
            } else {
                direction++;
                level++;
            }
        }

    }
    return answer.reduce((acc, cur) => [...acc, ...cur], []);
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));