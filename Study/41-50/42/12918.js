/*12918번 문제
문자열 다루기 기본*/

function solution(s) {
    if (s.length === 4 || s.length === 6) {
        const reg = /^[0-9]+$/;
        return reg.test(s);
    }
    return false;
}

const test1 = "a234";
const test2 = "1234";

console.log(solution(test1));
console.log(solution(test2));