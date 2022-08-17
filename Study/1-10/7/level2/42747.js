/* 81303번 문제
표 편집*/


function solution(citations) {
    let answer = 0;
    let cursor = 0;
    const n = citations.length;

    let sorted = Array.from(citations).sort((a, b) => a - b)

    for (let h = 0; h <= n; h++) {
        while (sorted[cursor] < h) {
            cursor++
            if (cursor >= n) break;
        }
        if (cursor >= n) break;
        let upper = n - cursor;

        if (upper >= h) answer = h;
    }
    return answer;
}

const citations1 = [3, 0, 6, 1, 5];
const citations2 = [3, 1, 1, 1, 4];

console.log(solution(citations1));
console.log(solution(citations2));