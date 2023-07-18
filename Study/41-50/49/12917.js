function solution(s) {
    return s.split('').sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
}

const test = 'Zbcdefg';

console.log(solution(test));