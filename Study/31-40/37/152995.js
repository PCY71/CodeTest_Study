/*152995번 문제
인사고과*/

function solution(scores) {
    const wanho = scores[0];
    const wanho_sum = wanho[0] + wanho[1];
    let max = 0;
    let rank = 1;
    // 완호보다 성적이 같거나 좋은 사람들만 필터
    scores = scores.filter((([a, b]) => a + b >= wanho[0] + wanho[1]))
        .sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);

    //score를 돌며 동료평가 점수가 높은 사람이 있으면 탈락(근무태도 기준 정렬이라 동료평가만 비교)
    for (let i = 0; i < scores.length; i++) {
        const score_sum = scores[i][0] + scores[i][1];
        if (scores[i][1] < max) {
            if (equals(scores[i], wanho)) return -1
        } else if (score_sum > wanho_sum) {
            rank++
        }
        max = Math.max(scores[i][1], max);
    }

    return rank;
}

const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

console.log(solution([[2, 2], [1, 4], [3, 2], [3, 2], [2, 1]]));
console.log(solution([[3, 1], [1, 4], [2, 3], [2, 3], [1, 5], [1, 0], [1, 0]]));
