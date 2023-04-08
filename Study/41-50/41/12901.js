/*12901번 문제
2016년*/

function solution(a, b) {
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const time = new Date(2016, a - 1, b);
    return day[time.getDay()];
}

console.log(solution(5, 24));