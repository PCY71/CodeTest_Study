/* 17687번 문제
n진수 게임*/

function solution(n, t, m, p) {
    let answer = '';
    let count = 0;
    while (answer.length < t * m) {
        answer += convert_digit(n, count);
        count++
    }
    return answer.split("").filter((el, i) => (i % m) + 1 === p).slice(0, t).join('');
}

/**
 * 10진법 수를 진법 변환해서 알파뱃이 포함되는 경우 대문자로 출력해주는 함수
 * @param {*} n 출력될 진법
 * @param {*} num 변환할 10진법 수
 * @returns 
 */
const convert_digit = (n, num) => {
    return num.toString(n).toUpperCase();
}

console.log(solution(2, 4, 2, 1));
console.log(solution(16, 16, 2, 1));
console.log(solution(16, 16, 2, 2));