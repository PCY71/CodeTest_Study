/*77884 문제
약수의 개수와 덧셈*/

function solution(left, right) {
    let answer = 0;

    const count_divisor = (num) => {
        let cnt = 0;
        for (let i = 1; i * i <= num; i++) {
            if (i * i === num) cnt++;
            else if (num % i === 0) cnt += 2;
        }
        return cnt;
    }

    for (let i = left; i <= right; i++) {
        let cur_count = count_divisor(i);
        answer = cur_count % 2 === 0
            ? answer + i
            : answer - i
    }
    return answer;
}
function solution(left, right) {
    let answer = 0;

    const count_divisor = (num) => {
        let cnt = 0;
        for (let i = 1; i * i <= num; i++) {
            if (i * i === num) cnt++;
            else if (num % i === 0) cnt += 2;
        }
        return cnt;
    }

    for (let i = left; i <= right; i++) {
        let cur_count = count_divisor(i);
        answer = cur_count % 2 === 0
            ? answer + i
            : answer - i
    }
    return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));