/*133499 문제
옹알이(2)*/

function solution(babbling) {
    let answer = 0;
    const dictionary = ["aya", "ye", "woo", "ma"]; //아이가 발음할 수 있는 사전

    babbling.forEach((word) => {
        const numReg = /^[0-9]+$/;      //숫자 정규식
        const repeatReg = /(.)\1+/;    //반복 여부 정규식
        dictionary.forEach((dict, idx) => word = word.replaceAll(dict, idx));   //단어에서 사전에 등록된 것들 숫자로 치환

        if (numReg.test(word)) answer += repeatReg.test(word) ? 0 : 1;   //숫자만 남은 경우(말할 수 있는 것만 남은 경우) 반복여부 체크후 answer 증가
    });

    return answer;
}

const test1 = ["aya", "yee", "u"];
const test2 = ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"];
const test3 = ["ayayeayayeaya"];

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));