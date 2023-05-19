/*118666 문제
성격 유형 검사하기*/

function solution(survey, choices) {
    let answer = ''
    //RT, CF, JM, AN
    const score = [0, 0, 0, 0];
    const map = new Map([
        ['RT', 0], ['TR', 0],
        ['CF', 1], ['FC', 1],
        ['JM', 2], ['MJ', 2],
        ['AN', 3], ['NA', 3]
    ])

    survey.forEach((el, idx) => {
        const order = el.charCodeAt(0) - el.charCodeAt(1) < 0 ? 1 : -1;
        const type = map.get(el);
        score[type] += order * (choices[idx] - 4)
    });

    answer += score[0] > 0 ? 'T' : 'R';
    answer += score[1] > 0 ? 'F' : 'C';
    answer += score[2] > 0 ? 'M' : 'J';
    answer += score[3] > 0 ? 'N' : 'A';

    return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
console.log(solution(["TR", "RT", "TR"], [7, 1, 3]));