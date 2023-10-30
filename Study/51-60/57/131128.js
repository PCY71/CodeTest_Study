function solution(X, Y) {
    let answer = ''
    let pairArr = new Array(10).fill(0);

    for (let i = 0; i < 10; i++) {
        x = X.split('').filter((el) => Number(el) === i).length;
        y = Y.split('').filter((el) => Number(el) === i).length;
        pairArr[i] = Math.min(x, y);
    }

    for (let i = 9; i >= 0; i--) {
        const n = pairArr[i];
        if (n > 0) {
            answer += String(i).repeat(n);
        }
    }

    if (answer === '') return '-1';
    if (Number(answer) === 0) return '0'

    return answer;
}

console.log(solution("100", "2345"));
console.log(solution("100", "203045"));
console.log(solution("100", "123450"));
console.log(solution("12321", "42531"));
console.log(solution("5525", "1255"));