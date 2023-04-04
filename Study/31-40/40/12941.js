function solution(A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    return A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
}
const test1 = [[1, 4, 2], [5, 4, 4]];
const test2 = [[1, 2], [3, 4]];

console.log(solution(test1[0], test1[1]));
console.log(solution(test2[0], test2[1]));