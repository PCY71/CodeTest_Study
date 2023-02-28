/*134239번 문제
우박수열 정적분*/

function solution(k, ranges) {
    var answer = [];
    let count = 0;
    const height = [k]
    const area = []

    //콜라츠 함수로 y좌표 연산
    while (k > 1) {
        k = collatz(k);
        height.push(k);
        count++;
    }
    const length = height.length;

    //각 시작점 별 부분합 구하기
    for (let i = 0; i < length - 1; i++) {
        const y1 = Math.min(height[i], height[i + 1]);
        const y2 = Math.max(height[i], height[i + 1]);
        area.push(y1 + (y2 - y1) / 2);
    }

    ranges.forEach(([start, end]) => {
        answer.push(integral(start, length + end - 1, area))
    })


    return answer;
}

const collatz = (num) => {
    if (num % 2) {
        return num * 3 + 1
    } else {
        return num / 2
    }
}

/**
 * 
 * @param {*} start //시작 지점의 x좌표
 * @param {*} end //끝 지점의 x좌표
 * @param {*} arr //각 x좌표별 1칸당 부분너비합이 담긴 array
 * @returns 정적분값
 */
const integral = (start, end, area) => {
    if (start === end) return 0;
    else if (start > end) return -1;

    let answer = 0;

    for (let i = start; i < end; i++) {
        answer += area[i];
    }
    return answer
}

console.log(solution(5, [[0, 0], [0, -1], [2, -3], [3, -3]]));