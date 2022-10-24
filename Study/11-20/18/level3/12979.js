/* 12979번 문제
기지국 설치*/

function solution(n, stations, w) {
    let answer = 0;


    //첫 기지국 전
    if (stations[0] - w - 1 >= 1) {
        answer += cal(1, stations[0] - w - 1, w);
    }
    //기지국 사이
    for (let i = 1; i < stations.length; i++) {
        answer += cal(stations[i - 1] + w + 1, stations[i] - w - 1, w);
    }
    //마지막 기지국 이후
    if (stations[stations.length - 1] + w + 1 <= n) {
        answer += cal(stations[stations.length - 1] + w + 1, n, w);
    }
    return answer;
}

const cal = (start, end, w) => {
    let len = end - start + 1;
    let cover_width = w * 2 + 1;
    let count = 0;
    while (count * cover_width < len) {
        count += 1;
    }
    return count;
}

console.log(solution(11, [4, 11], 1));
console.log(solution(16, [9], 2));