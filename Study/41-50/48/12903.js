/*12903 문제
가운데 글자 가져오기*/

function solution(s) {
    const midIdx = Math.floor(s.length / 2)
    return s.length % 2
        ? s[midIdx]//홀수
        : s.substr(midIdx - 1, 2)//짝수;
}

const test1 = 'abcde';
const test2 = 'qwer';

console.log(solution(test1));
console.log(solution(test2));