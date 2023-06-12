/*12922 문제
수박수박수박수박수박수?*/

function solution(n) {
    const watermelon = '수박';
    return n % 2
        ? watermelon.repeat(Math.floor(n / 2)) + '수'
        : watermelon.repeat(n / 2);
}

console.log(solution(3));
console.log(solution(4));