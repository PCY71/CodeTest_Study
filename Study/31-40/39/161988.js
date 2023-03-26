/*161988번 문제
연속 펄스 부분 수열의 합*/
function solution(sequence) {
    const len = sequence.length;
    const dp1 = new Array(len);
    const dp2 = new Array(len);
    dp1[0] = sequence[0];
    dp2[0] = sequence[0] * -1;
    for (let i = 1; i < len; i++) {
        const pulse = i % 2 === 0 ? 1 : -1
        dp1[i] = Math.max(0, dp1[i - 1]) + sequence[i] * pulse;
        dp2[i] = Math.max(0, dp2[i - 1]) + sequence[i] * pulse * -1;
    }

    //const max1 = Math.max(dp1);
    //const max2 = Math.max(...dp2);
    const max1 = dp1.reduce((prev, cur) => cur > prev ? cur : prev);
    const max2 = dp2.reduce((prev, cur) => cur > prev ? cur : prev);
    return Math.max(max1, max2);
}
console.log(solution([2, 3, -6, 1, 3, -1, 2, 4]));