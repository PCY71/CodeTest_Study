function solution(s) {
    const arr = s.split(' ').map((el, idx) => transCase(el));
    return arr.join(' ');
}

const transCase = (str) => {
    let answer = ''
    for (let i = 0; i < str.length; i++) {
        const cur = str[i];
        answer += i % 2 === 1 ? cur.toLowerCase() : cur.toUpperCase();
    }
    return answer;
}

const test = "try hello world";

console.log(solution(test));