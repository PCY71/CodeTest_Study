/* 64062번 문제
징검다리 건너기*/

function solution(stones, k) {
    return check_stone(stones, k, 1, 200000000);
}

const check_stone = (stones, k, min, max) => {
    if (min === max) return min;

    let mid = Math.round((min + max) / 2);
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
        if (count === k) break;
        let value = stones[i] - (mid - 1);
        value <= 0 ? count++ : count = 0;
    }

    if (count === k) return check_stone(stones, k, min, mid - 1);
    else return check_stone(stones, k, mid, max);
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
