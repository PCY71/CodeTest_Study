/* 12909번 문제
올바른 괄호*/

function solution(s) {
    let count = 0
    for (const bracket of s) {
        count = bracket === "(" ? count + 1 : count - 1;
        if (count < 0) return false
    }

    return count === 0 ? true : false;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));