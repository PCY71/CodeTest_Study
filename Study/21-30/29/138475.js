/* 138475번 문제
억억단을 외우자*/

function solution(e, starts) {
    //각 숫자별 약수의 개수 저장
    let divisor = cal_prime_num(e);

    //각 시작지점별 약수의 개수가 가장 많은 idx 저장
    const max_divisor_idx = new Array(e + 1);
    let max = [e, divisor[e]];
    for (let i = e; i > 0; i--) {
        if (divisor[i] >= max[1]) {
            max = [i, divisor[i]];
        }
        max_divisor_idx[i] = max[0];
    }

    return starts.map((start) => max_divisor_idx[start]);
}

//약수의 개수 구하는 함수
const cal_prime_num = (num) => {
    const arr = new Array(num + 1).fill(0);
    for (let i = 1; i <= num; i++) {
        for (let j = i; j <= num; j += i) {
            arr[j]++;
        }
    }
    return arr;
}

console.log(solution(8, [1, 3, 7]));