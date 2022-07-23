/* 60057번 문제
문자열 압축*/

function solution(s) {
    if (s.length === 1) return 1;

    let answer = s.length;

    for (let cut = 1; cut <= Math.floor(s.length / 2); cut++) {
        let str = '';
        let count = 1;

        for (let idx = 0; idx < s.length; idx += cut) {
            let cur = s.substring(idx, idx + cut);
            let next = s.substring(idx + cut, idx + 2 * cut);
            if (cur === next) {
                count++
            } else {
                str = count > 1 ? str + count + cur : str + cur;
                count = 1;
            }
        }
        answer = Math.min(answer, str.length);

    }

    return answer;
}

const s1 = "aabbaccc";
const s2 = "ababcdcdababcdcd";
const s3 = "abcabcdede";
const s4 = "abcabcabcabcdededededede";
const s5 = "xababcdcdababcdcd";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
console.log(solution(s5));
