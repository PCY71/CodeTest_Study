/*12934 문제
정수 제곱근 판별*/

function solution(n) {
    const s = Math.floor(Math.sqrt(n));
    return s * s === n ? Math.pow(s + 1, 2) : -1;
}

console.log(solution(121));
console.log(solution(3));
console.log(solution(101));