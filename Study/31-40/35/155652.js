/*155652번 문제
둘만의 암호*/

function solution(s, skip, index) {
    let answer = '';
    const skip_to_code = skip.split('').map((el) => el.charCodeAt() - 97);   //skip의 글자들을 코드화

    //입력받은 char를 index만큼 증가시켜 return
    const calculate = (char) => {
        let code = char.charCodeAt() - 97;
        for (let i = 0; i < index; i++) {
            while (skip_to_code.some(num => num === (code + 1) % 26)) code = (code + 1) % 26;
            code = (code + 1) % 26;
        }
        return String.fromCharCode(code + 97)
    }

    //s의 각 문자들을 변환
    for (const char of s) {
        answer += calculate(char);
    }

    return answer;
}

console.log(solution("aukks", "wbqd", 5));
console.log(solution("z", "abcdefghij", 20));
