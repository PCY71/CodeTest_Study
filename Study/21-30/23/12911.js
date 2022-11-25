/* 12911번 문제
다음 큰 숫자*/

function solution(n) {
    const quantity = [...n.toString(2)].reduce((acc, cur) => acc = cur === '1' ? acc + 1 : acc, 0);
    let num = n + 1
    while (num < 2 * n) {
        const numQuantity = [...num.toString(2)].reduce((acc, cur) => acc = cur === '1' ? acc + 1 : acc, 0);
        if (quantity === numQuantity) return num;
        num++;
    }

    return -1;
}

console.log(solution(78));
console.log(solution(15));