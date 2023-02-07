/*134240번 문제
푸드 파이트 대회*/

function solution(food) {
    let table = '';
    for (let i = 1; i < food.length; i++) {
        const count = Math.floor(food[i] / 2);
        table += i.toString().repeat(count);
    }

    return table + '0' + table.split('').reverse().join('');
}

const test1 = [1, 3, 4, 6];
const test2 = [1, 7, 1, 2];

console.log(solution(test1));
console.log(solution(test2));