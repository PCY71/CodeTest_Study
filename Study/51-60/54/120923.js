/*87391 문제
연속된 수의 합*/

function solution(num, total) {
    const answer = [];
    const middle = Math.floor(total / num);

    if (num % 2 === 0) {
        for (let i = 0; i < num; i++) {
            answer.push(middle - ((num / 2) - 1) + i);
        }
    } else {
        for (let i = 0; i < num; i++) {
            answer.push(middle - (Math.floor(num / 2)) + i)
        }
    }

    return answer;
}

console.log(solution(3, 12));
console.log(solution(5, 15));
console.log(solution(4, 14));
console.log(solution(5, 5));