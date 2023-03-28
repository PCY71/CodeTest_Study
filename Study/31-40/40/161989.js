/*161989번 문제
덧칠하기*/

function solution(n, m, section) {
    let answer = 0;
    do {
        const end = section[0] + m - 1;
        while (section.length > 0 && section[0] <= end) section.shift();
        answer++;
    } while (section.length > 0)
    return answer;
}

console.log(solution(8, 4, [2, 3, 6]));
console.log(solution(5, 4, [1, 3]));
console.log(solution(4, 1, [1, 2, 3, 4]));