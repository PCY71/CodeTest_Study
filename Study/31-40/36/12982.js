/*12982번 문제
예산*/

function solution(d, budget) {
    let answer = 0;

    d.sort((a, b) => a - b);
    d.forEach((request) => {
        if (request > budget) return answer
        budget -= request;
        answer++;
    })

    return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));