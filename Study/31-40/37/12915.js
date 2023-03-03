/*12915번 문제
문자열 내 마음대로 정렬하기*/

function solution(strings, n) {
    strings.sort((a, b) => {
        //n번째 문자의 위치로 정렬
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;

        //n번째 문자가 같을 경우
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    })
    return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));

