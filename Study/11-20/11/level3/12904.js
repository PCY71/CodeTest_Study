/* 12904번 문제
가장 긴 팰린드롬*/

function solution(s) {
    const len = s.length;
    if (len === 0) return 0;

    for (let size = len; size > 0; size--) {
        for (let idx = 0; idx <= len - size; idx++) {
            const str = s.slice(idx, idx + size);
            if (is_Palindrome(str)) return size;
        }
    }
    return 1;
}

const is_Palindrome = (str) => {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str.charAt(i) !== str.charAt(str.length - 1 - i)) return false;
    }
    return true;
}

console.log(solution("abcdcba"));
console.log(solution("abacde"));