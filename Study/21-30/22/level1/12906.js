/* 12906번 문제
같은 숫자는 싫어*/

function solution(arr) {
    const answer = [];
    let prev = -1;

    arr.forEach((el) => {
        if (el !== prev) answer.push(el);
        prev = el;
    })

    return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));