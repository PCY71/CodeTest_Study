/* 86491번 문제
최소직사각형*/

function solution(sizes) {
    //각 명함의 짧은 부분과 긴 부분을 정렬
    sizes = sizes.map((el) => el.sort((a, b) => a - b));
    let wallet = sizes[0];

    //각 부분별 최대값만 기록
    for (let i = 1; i < sizes.length; i++) {
        wallet = [Math.max(wallet[0], sizes[i][0]), Math.max(wallet[1], sizes[i][1])];
    }

    return wallet.reduce((a, b) => a * b);
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));
console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]));
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));