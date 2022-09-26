/* 70129번 문제
이진 변환 반복하기*/

function solution(s) {
    let answer = [0, 0];

    while (s !== '1') {
        let arr = s.split('0');
        let count = arr.length - 1;
        s = arr.join('').length.toString(2);
        answer[0]++;
        answer[1] += count;
    }
    return answer;
}
console.log(solution("110010101001"));
console.log(solution("01110"));
console.log(solution("1111111"));