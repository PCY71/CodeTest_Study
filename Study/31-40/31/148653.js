/*148653번 문제
마법의 엘리베이터*/

function solution(storey) {
    let answer = 0;
    const dict = [0, 1, 2, 3, 4, 5, 4, 3, 2, 1];
    while (storey > 0) {
        let cur = storey % 10;
        let next = Math.floor(storey / 10);

        answer += dict[cur];
        if (cur > 5 || (cur === 5 && next % 10 >= 5)) next++
        storey = next;
    }

    return answer;
}

console.log(solution(16));
console.log(solution(2554));