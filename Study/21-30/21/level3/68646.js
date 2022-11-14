/* 68646번 문제
풍선 터트리기*/

function solution(a) {
    let answer = 2;
    let left_min = a[0];
    let right_min = a.slice(-1)[0];

    for (let i = 1; i < a.length - 1; i++) {
        if (a[i] < left_min) {
            left_min = a[i];
            answer++;
        }
        if (a[a.length - 1 - i] < right_min) {
            right_min = a[a.length - 1 - i];
            answer++
        }
    }

    answer = (left_min === right_min) ? answer - 1 : answer;

    return answer;
}

console.log(solution([9, -1, -5]));
console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]));