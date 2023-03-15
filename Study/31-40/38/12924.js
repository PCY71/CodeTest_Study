/*12924번 문제
숫자의 표현*/

function solution(n) {
    let answer = 0;
    let right = 1;
    let sum = 1;
    for (let left = 1; left <= n; left++) {
        while (sum < n) {
            right++;
            sum += right;
        }

        if (sum === n) answer += 1;
        sum -= left;
    }
    return answer;
}

console.log(solution(15));