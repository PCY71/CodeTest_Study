/*81301번 문제
숫자 문자열과 영단어*/

function solution(s) {
    let answer = '';    //출력할 answer
    let strNum = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];   //사전에 들어갈 숫자들의 알파뱃 정보
    let dictionary = new Map(); //각 숫자들의 알파뱃을 map구조로 저장
    let stack = [];     //글자를 읽으며 저장할 stack

    const isNum = (char) => {
        let num_range = /[0-9]/;
        return num_range.test(char);
    }

    //사전 초기화
    strNum.forEach((num, idx) => {
        dictionary.set(num, idx);
    })

    //입력된 s를 순회하며 숫자화
    s.split('').forEach((char, idx) => {
        //현재 stack에 완성된 단어가 들어있으면 answer에 추가
        if (dictionary.get(stack.join(''))) {
            answer += dictionary.get(stack.join(''));
            stack = [];
        }
        //현재 글자가 숫자인 경우 answer에 바로 붙이기 
        //아닌 경우 stack에만 추가
        isNum(char) ? answer += char : stack.push(char);

        //만약 마지막 항이고 stack에 글자가 남아있으면 answer에 추가
        if (idx == s.length - 1 && stack.length) answer += dictionary.get(stack.join(''));
    })

    return Number(answer)
}

const test1 = "one4seveneight";
const test2 = "23four5six7";
const test3 = "2three45sixseven";
const test4 = "123";
const test5 = "oneoneoneone";

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
console.log(solution(test4));
console.log(solution(test5));