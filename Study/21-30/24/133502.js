function solution(ingredient) {
    let stack = [];
    let count = 0;

    ingredient.forEach((item) => {
        stack.push(item);
        if (item === 1 && stack.length >= 4) {
            const idx = stack.length - 1;
            const bread = stack[idx - 3];
            const vege = stack[idx - 2];
            const meat = stack[idx - 1];

            if (bread === 1 && vege === 2 && meat === 3) {
                //stack = stack.slice(0, stack.length-4);
                for (let i = 0; i < 4; i++) {
                    stack.pop();
                }
                count++;
            }
        }
    })

    return count;
}

const test1 = [2, 1, 1, 2, 3, 1, 2, 3, 1];
const test2 = [1, 3, 2, 1, 2, 1, 3, 1, 2];

console.log(solution(test1));
console.log(solution(test2));