/*135808번 문제
과일 장수*/

function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);

    for (let i = 0; i + m <= score.length; i = i + m) {
        answer += score[i + m - 1] * m;
    }

    return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
