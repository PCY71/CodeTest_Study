/*148652 문제
유사 칸토어 비트열*/

function solution(n, l, r) {
    return cal(n, r) - cal(n, l - 1);
}

const cal = (n, k) => {
    if (n === 1) return k <= 2 ? k : k - 1;
    const div = 5 ** (n - 1);
    const mul = 4 ** (n - 1);
    let loc = Math.floor(k / div);

    if (k % div === 0) loc--;

    return loc < 2 ? mul * loc + cal(n - 1, k - loc * div) // '11' 011
        : loc === 2 ? mul * loc   // 11 '0' 11
            : mul * (loc - 1) + cal(n - 1, k - loc * div) // 110 '11'
}

console.log(solution(2, 4, 17));