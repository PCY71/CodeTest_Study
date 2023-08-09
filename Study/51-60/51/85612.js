/*85612 문제
부족한 금액 계산하기*/

function solution(price, money, count) {
    const cost = count * (2 * price + (count - 1) * price) / 2
    const answer = money - cost;

    return answer >= 0 ? 0 : Math.abs(answer);
}

console.log(solution(3, 20, 4));