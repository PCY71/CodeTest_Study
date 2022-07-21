/* 43238번 문제
네트워크*/

function solution(n, times) {
    let answer = 0;

    // 배열을 정렬
    times.sort((a, b) => a - b);

    let left = 0;                               //최소시간
    let right = n * times[times.length - 1];    //최대시간
    let middle;                                 //중간값
    let count;                                  //심사한 인원

    while (left <= right) {
        middle = Math.floor((left + right) / 2);
        count = times.reduce((acc, cur) => acc + Math.floor(middle / cur), 0)
        if (count < n) {
            left = middle + 1;
        } else {
            right = middle - 1;
            answer = middle;
        }
    }

    return answer;
}

const n = 6;
const times = [7, 10];

console.log(solution(n, times));