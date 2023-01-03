/* 142086번 문제
가장 가까운 같은 글자*/

function solution(s) {
    const answer = [];
    let map = new Map();

    [...s].forEach((char, idx) => {
        if (map.has(char)) {
            answer.push(idx - map.get(char));
        } else {
            answer.push(-1);
        }
        map.set(char, idx);
    })

    return answer;
}

const test1 = "banana";
const test2 = "foobar";

console.log(solution(test1));
console.log(solution(test2));