/* 12936번 문제
줄 서는 방법*/

function solution(n, k) {
    const answer = [];
    const list = new Array(n).fill(0).map((el, idx) => idx + 1);
    let nth = k - 1;

    while (list.length) {
        if (nth === 0) {
            answer.push(...list);
            break;
        }

        const fact = factorial(list.length - 1);
        const index = Math.floor(nth / fact);
        nth = nth % fact;

        answer.push(list[index]);
        list.splice(index, 1);
    }

    return answer;
}

const factorial = (x) => x === 1 ? 1 : x * factorial(x - 1);

console.log(solution(3, 5));