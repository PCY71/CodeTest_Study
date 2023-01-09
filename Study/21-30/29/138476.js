/* 138476번 문제
귤 고르기*/

function solution(k, tangerine) {
    const max = Math.max(...tangerine);
    let size = new Array(max + 1).fill(0);
    let answer = 0;

    tangerine.forEach((item) => size[item]++);
    size.sort((a, b) => b - a);
    for (let i = 0; i < size.length; i++) {
        const num = size[i];
        if (num === 0 || k <= 0) break;

        k -= num;
        answer++;

    }

    return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));