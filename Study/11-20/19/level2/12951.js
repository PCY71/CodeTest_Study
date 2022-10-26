/* 12951번 문제
JadenCase 문자열만들기*/

function solution(s) {
    let words = s.split(' ')
        .map((word) =>
            word.slice(0, 1).toUpperCase() + word.slice(1)?.toLowerCase());

    return words.join(' ')
}
console.log(solution("3people unFollowed me"));
console.log(solution("for the last week"));
console.log(solution("a aa"));