/*152996번 문제
시소 짝꿍*/

function solution(weights) {
    let answer = 0;
    const n = weights.length;
    weights.sort((a, b) => a - b);
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (weights[j] > 2 * weights[i]) break;
            if (isBalanced(weights[i], weights[j])) answer++;
        }
    }

    return answer;
}

//중복을 검사를 줄이기 위해 b는 항상 a와 같거나 큰 값만 들어옴
const isBalanced = (a, b) => a === b || a / 2 === b / 3 || a === b / 2 || a / 3 === b / 4;

console.log(solution([100, 180, 360, 100, 270]));