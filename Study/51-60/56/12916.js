/*12916 문제
직사각형 별찍기*/

function solution(s) {
    s = s.toLowerCase();
    let count = 0;
    [...s].forEach((char) => {
        if (char === 'p') count++;
        else if (char === 'y') count--;
    })

    return count === 0 ? true : false;
}

console.log(solution("pPoooyY"));
console.log(solution("Pyy"));