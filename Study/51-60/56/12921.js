/*12921 문제
프렌즈4블록*/

function solution(n) {
    let answer = new Array(n + 1).fill(true);

    for (let i = 2; i <= n; i++) {
        if (answer[i]) {
            let multiple = 2;
            while (i * multiple <= n) {
                answer[i * multiple] = false;
                multiple++;
            }
        }
    }

    //0과 1 빼주기
    return answer.reduce((acc, cur) => cur === true ? acc + 1 : acc, 0) - 2;
}

console.log(solution(10));
console.log(solution(5));