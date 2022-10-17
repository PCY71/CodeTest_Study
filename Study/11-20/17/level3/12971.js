/* 12971번 문제
스티커 모으기*/

function solution(sticker) {
    const size = sticker.length + 2;

    const dp1 = new Array(size).fill(0);
    const dp2 = new Array(size).fill(0);

    if (size <= 3) {
        return Math.max(...sticker);
    }

    for (let i = 2; i < size - 1; i++) {
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);
        dp2[i + 1] = Math.max(dp2[i], dp2[i - 1] + sticker[i - 1]);
    }

    return Math.max(dp1[size - 2], dp2[size - 1]);
}

console.log(solution([14, 6, 5, 11, 3, 9, 2, 10]));
console.log(solution([1, 3, 2, 5, 4]));
console.log(solution([1, 5, 2]));