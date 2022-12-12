/* 131704번 문제
택배상자*/

function solution(order) {
    let idx = 0;
    const stack = [];
    const n = order.length;

    for (let i = 1; i <= n; i++) {
        if (i === order[idx]) {
            idx++;
            while (idx < n && stack[stack.length - 1] === order[idx]) {
                stack.pop();
                idx++;
            }
        } else {
            stack.push(i);
        }
    }
    return idx;
}

console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));