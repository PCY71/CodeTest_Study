/*12910 문제
나누어 떨어지는 숫자배열*/

function solution(arr, divisor) {
    const answer = [];
    for (const num of arr) {
        if (num % divisor === 0) answer.push(num);
    }
    return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 10));