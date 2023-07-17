function solution(x) {
    return x % [...x.toString()].reduce((acc, cur) => acc + Number(cur), 0) === 0;
}
console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));