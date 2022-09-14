/* 12939번 문제
최댓값과 최솟값*/

function solution(s) {
    let answer = s.split(' ')
    return `${Math.min(...answer)} ${Math.max(...answer)}`;
}

console.log(solution("1 2 3 4"));
console.log(solution("-1 -2 -3 -4"));
console.log(solution("-1 -1"));