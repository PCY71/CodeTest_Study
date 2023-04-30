/*178870번 문제
연속된 부분 수열의 합*/

function solution(sequence, k) {
    if (sequence[0] === k) return [0, 0];

    let answer = [0, Infinity];
    const len = sequence.length;
    let i = j = 0;
    let sum = sequence[0];


    while (i < len) {
        const next = sequence[j + 1]

        if (sum + next > k) {
            sum -= sequence[i++];
        } else {
            const [prev_i, prev_j] = answer;

            sum += sequence[++j];
            if (sum === k && prev_j - prev_i > j - i) answer = [i, j];
            if (j === len - 1) break;
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5], 7));
console.log(solution([1, 1, 1, 2, 3, 4, 5], 5));
console.log(solution([2, 2, 2, 2, 2], 6));