/*86053번 문제
금과 은 운반하기*/

function solution(a, b, g, s, w, t) {
    let low = 0;
    let high = Number.MAX_SAFE_INTEGER;

    while (low + 1 < high) {
        let mid = Math.floor((low + high) / 2);
        if (isPossible(mid, a, b, g, s, w, t)) high = mid;
        else low = mid;
    }

    return high;
}

const isPossible = (time, a, b, g, s, w, t) => {
    const n = g.length;
    let total = 0;
    let gold = 0;
    let silver = 0;

    for (let i = 0; i < n; i++) {
        let cnt = Math.floor(time / (2 * t[i]));
        if (time % (2 * t[i]) >= t[i]) cnt++

        let tmp = Math.min(cnt * w[i], g[i] + s[i]);
        total += tmp;
        gold += Math.min(tmp, g[i]);
        silver += Math.min(tmp, s[i]);
    }
    if (total >= a + b && gold >= a && silver >= b) return true;
    return false;

}

console.log(solution(10, 10, [100], [100], [7], [10]));
console.log(solution(90, 500, [70, 70, 0], [0, 0, 500], [100, 100, 2], [4, 8, 1]));