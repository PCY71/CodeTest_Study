/* 12953번 문제
N개의 최소공배수*/

function solution(arr) {
    let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];
        answer = (answer * num / gcd(answer, num));
    }
    return answer;
}

const gcd = (a, b) => {
    let r;
    while (b != 0) {
        r = a % b;
        a = b;
        b = r;
    }

    return a;
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));