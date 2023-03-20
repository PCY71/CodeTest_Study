/*12926번 문제
시저 암호*/

function solution(s, n) {
    let answer = '';

    const trans_char = (char) => {
        const code = char.charCodeAt();
        //소문자
        if (code >= 97) {
            return String.fromCharCode((code - 97 + n) % 26 + 97);
            //대문자
        } else if (code >= 65) {
            return String.fromCharCode((code - 65 + n) % 26 + 65);
            //공백
        } else {
            return ' ';
        }
    }

    for (const char of s) {
        answer += trans_char(char);
    }
    return answer;
}

console.log(solution("AB", 1));
console.log(solution("z", 1));
console.log(solution("a B z", 4));