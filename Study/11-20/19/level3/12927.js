/* 12927번 문제
야근 지수*/

function solution(n, works) {
    if (works.reduce((acc, cur) => acc + cur, 0) <= n) return 0;

    let sorted = works.sort((a, b) => b - a);

    while (n > 0) {
        let max = sorted[0];

        for (let i = 0; i < works.length; i++) {
            if (n > 0 && max === sorted[i]) {
                sorted[i]--;
                n--;
            } else {
                break;
            }
        }
    }

    return sorted.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}
console.log(solution(4, [4, 3, 3]));
console.log(solution(1, [2, 1, 2]));
console.log(solution(3, [1, 1]));
