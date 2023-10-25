/*12932 문제
자연수 뒤집어 배열로 만들기*/

function solution(n) {
    return n.toString().split('')
        .map((el) => Number(el)).reverse();
}

console.log(solution(12345));
console.log(solution(52456));