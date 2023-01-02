/* 70130번 문제
스타 수열*/

function solution(a) {
    let max = 0;

    let count = new Array(a.length).fill(0);
    a.forEach((num) => count[num]++);

    for (let num = 0; num < count.length; num++) {
        if (count[num] <= max) continue;
        let len = 0;

        for (let i = 0; i < a.length - 1; i++) {
            //2개로 나눈 집합에 nu이 포함되지 않는 경우
            if (a[i] != num && a[i + 1] != num) continue;
            //2개의 수가 일치해 스타수열이 되지 않는 경우
            if (a[i] === a[i + 1]) continue;
            len++;
            i++;
        }
        max = Math.max(max, len);
    }

    return max * 2;
}

const test1 = [0];
const test2 = [5, 2, 3, 3, 5, 3];
const test3 = [0, 3, 3, 0, 7, 2, 0, 2, 2, 0];
const test4 = [5, 3, 2, 3, 5, 3];

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
console.log(solution(test4));