/* 12948번 문제
핸드폰 번호 가리기*/

function solution(phone_number) {
    return [...phone_number]
        .map((el, idx) => idx < (phone_number.length - 4) ? '*' : el).join('');
}

const test1 = "01033334444";
const test2 = "027778888";

console.log(solution(test1));
console.log(solution(test2));