/* 136798번 문제
기사단원의 무기*/

function solution(number, limit, power) {
    const weapon = [];
    for (let i = 1; i <= number; i++) {
        const cur = count_divide_num(i);
        weapon.push(cur > limit ? power : cur);
    }
    return weapon.reduce((acc, cur) => acc + cur, 0);
}

const count_divide_num = (num) => {
    let count = 1;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) count++;
    }
    return count;
}

console.log(solution(5, 3, 2));
console.log(solution(10, 3, 2));