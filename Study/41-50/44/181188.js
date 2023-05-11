/*181188번 문제
요격 시스템*/

function solution(targets) {
    let answer = 1;
    targets.sort((a, b) => a[0] - b[0]);

    let cur = targets[0][1] - 0.5;

    for (let i = 1; i < targets.length; i++) {
        if (cur < targets[i][0]) {
            answer++;
            cur = targets[i][1] - 0.5;
        }
        if (cur > targets[i][1]) cur = targets[i][1] - 0.5;
    }


    return answer;
}

console.log(solution([[4, 5], [4, 8], [10, 14], [11, 13], [5, 12], [3, 7], [1, 4]]));
