/* 12899번 문제
124 나라의 숫자*/

function solution(n) {
    let answer = '';
    const num = [4, 1, 2];

    while (n > 0) {
        answer = num[n % 3] + answer;
        n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3)
    }

    return answer;
}

console.log(solution(1));
console.log(solution(2));
console.log(solution(3));
console.log(solution(4));
