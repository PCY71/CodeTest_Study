/*92335번 문제
k진수에서 소수 개수 구하기*/

function solution(n, k) {
    let answer = 0;
    const transed_num = n.toString(k);
    transed_num.split('0').forEach((num) => {
        if (is_prime(Number(num))) answer++;
    })
    return answer;
}

const is_prime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
    return true;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));