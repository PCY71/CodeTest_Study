/*154539번 문제
뒤에 있는 큰 수 찾기*/

function solution(numbers) {
    const n = numbers.length;
    const answer = new Array(n).fill(-1);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (numbers[stack.at(-1)] < numbers[i]) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    return answer;
}

console.log(solution([2, 3, 3, 5]));
console.log(solution([9, 1, 5, 3, 6, 2]));