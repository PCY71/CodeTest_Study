/* 42895번 문제
N으로 표현*/

function solution(N, number) {
    if (N === number) return 1;

    let set = Array.from(new Array(9), () => new Set());

    //각 자리수만큼 반복한 값을 초기값으로
    for (let i = 1; i < 9; i++) {
        let str = "" + N;
        set[i].add(Number(str.repeat(i)));
    }

    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < i; j++) {
            for (let first of set[j]) {
                for (let second of set[i - j]) {
                    set[i].add(first + second);
                    set[i].add(first - second);
                    set[i].add(first * second);
                    set[i].add(Math.floor(first / second));
                }
            }
        }

        if (set[i].has(number)) return i;
    }

    return -1;
}

const n1 = 5;
const n2 = 2;
const number1 = 12;
const number2 = 11;

console.log(solution(n1, number1));
console.log(solution(n2, number2));

