/* 12946번 문제
하노이의 탑*/

function solution(n) {
    const answer = [];

    const hanoi = (num, from, to, via) => {
        if (num === 1) answer.push([from, to]);
        else {
            hanoi(num - 1, from, via, to);
            answer.push([from, to]);
            hanoi(num - 1, via, to, from);
        }
    }

    hanoi(n, 1, 3, 2);
    return answer;
}

console.log(solution(2));