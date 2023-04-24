/*147355번 문제
크기가 작은 부분문자열*/

function solution(t, p) {
    var answer = 0;
    const p_length = p.length;
    for (let i = 0; i <= t.length - p_length; i++) {
        answer = Number(t.substr(i, p_length)) <= Number(p) ? answer + 1 : answer;
    }
    return answer;
}
console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));
console.log(solution("10203", "15"));