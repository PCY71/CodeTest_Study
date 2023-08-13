/*132267 문제
콜라 문제*/

function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        const bundle = Math.floor(n / a);
        answer += b * bundle;
        n = (bundle * b) + (n % a);
    }
    return answer;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));