function solution(num) {
    let count = 0;
    while (count < 500 && num !== 1) {
        num = num % 2 === 0 ? num / 2 : num * 3 + 1
        count++;
    }
    return count < 500 ? count : -1;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));