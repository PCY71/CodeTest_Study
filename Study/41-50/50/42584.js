/*42584 문제
주식가격*/

function solution(prices) {
    const length = prices.length;
    const answer = new Array(length).fill(0);
    for (let i = 0; i < length; i++) {
        const curPrice = prices[i];
        for (let j = i + 1; j < length; j++) {
            const futurePrice = prices[j];
            answer[i]++;
            if (futurePrice < curPrice) {
                break;
            }
        }
    }
    return answer;
}

const price1 = [1, 2, 3, 2, 3];

console.log(solution(price1));