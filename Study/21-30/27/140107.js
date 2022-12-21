/* 140107번 문제
점 찍기*/

function solution(k, d) {
    let count = 0;

    for (let x = 0; x <= d; x += k) {
        const max_y = Math.floor(Math.sqrt(d ** 2 - x ** 2));
        count += Math.floor(max_y / k) + 1;
    }
    return count;
}

console.log(solution(2, 4));
console.log(solution(1, 5));