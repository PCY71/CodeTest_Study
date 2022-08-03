/* 76502번 문제
괄호 회전하기*/


function solution(s) {
    let answer = 0;
    const bracketPair = { '(': ')', '{': '}', '[': ']' };
    for (let i = 0; i < s.length; i++) {
        const curStr = s.slice(i) + s.slice(0, i);
        let isValid = true;
        const stack = [];

        for (let j = 0; j < curStr.length; j++) {
            const curChar = curStr.charAt(j);
            //여는 괄호의 경우
            if (Object.keys(bracketPair).includes(curChar)) stack.push(curChar);
            //닫는 괄호의 경우
            else {
                if (stack.length === 0) {
                    isValid = false;
                    break;
                }
                const prevBracket = stack.pop();
                if (curChar !== bracketPair[prevBracket]) {
                    isValid = false;
                    break;
                }
            }
        }


        // 괄호가 열렸는데 닫히지 않은 경우
        if (stack.length > 0) isValid = false;

        answer = isValid ? answer + 1 : answer;
    }
    return answer;
}
const s1 = "[](){}";
const s2 = "}]()[{";
const s3 = "[)(]";
const s4 = "}}}";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
