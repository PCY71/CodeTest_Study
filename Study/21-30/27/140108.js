/* 140108번 문제
문자열 나누기*/

function solution(s) {
    /**
     * answer - 분리된 문자열의 수
     * x - 매 문자열 첫 글자
     * count - x의 수
     * other - 다른 글자의 수
     */
    let answer = 0;
    let x = '';
    let count = 0;
    let other = 0;

    for (let i = 0; i < s.length; i++) {
        //x가 초기화된 상태일 때
        if (x === '') {
            x = s.charAt(i);
            count++;
            continue;
        }

        //x가 입력된 경우
        if (s.charAt(i) === x) {
            count++;
            continue;
        } else {
            //x가 아닌 글자가 입력된 경우
            other++;
            //다른 글자가 들어와 x와 수가 같아져 분리되는 경우
            if (count === other) {
                answer++;
                x = '';
                count = other = 0;
            }
        }
    }

    return x === '' ? answer : answer + 1;
}

const test1 = "banana";
const test2 = "abracadabra";
const test3 = "aaabbaccccabba";

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));