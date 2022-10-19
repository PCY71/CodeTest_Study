function solution(n, info) {
    let result = Array.from({ length: 11 }, () => 0);
    let max = 0;

    function shot(peachScore, ryanScore, count, idx, scoreBoard) {
        if (n < count) return;

        if (idx > 10) {
            let scoreDiff = ryanScore - peachScore;

            if (max < scoreDiff) {
                scoreBoard[10] = n - count;
                max = scoreDiff;
                result = scoreBoard;
            }
            return;
        }

        if (n > count) {
            let candidate = [...scoreBoard];
            candidate[10 - idx] = info[10 - idx] + 1;
            shot(peachScore, ryanScore + idx, count + info[10 - idx] + 1, idx + 1, candidate);
        }

        if (info[10 - idx] > 0) {
            shot(peachScore + idx, ryanScore, count, idx + 1, scoreBoard);
        } else {
            shot(peachScore, ryanScore, count, idx + 1, scoreBoard);
        }
    }

    shot(0, 0, 0, 0, result);

    if (max <= 0) return [-1]
    else return result;
}

const test1 = [5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]];
const test2 = [1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
const test3 = [9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]];
const test4 = [10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]];

console.log(solution(test1[0], test1[1]));
console.log(solution(test2[0], test2[1]));
console.log(solution(test3[0], test3[1]));
console.log(solution(test4[0], test4[1]));