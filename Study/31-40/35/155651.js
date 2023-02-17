/*155651번 문제
호텔 대실*/

function solution(book_time) {
    let max = 0;            //최대로 사용된 객실수
    let cur_room = 0;       //현재 사용되는 객실수
    const timeline = [];    //[time, type] 식으로 기록 type -> 0: 입실 1: 퇴실

    //각 출입 기록 저장
    for (const [start, end] of book_time) {
        timeline.push([time_to_num(start), 0]);
        timeline.push([time_to_num(end) + 10, 1]);
    }

    //시간순 정렬 - 1.시간이 빠른순 2.같은 경우 퇴실먼저
    timeline.sort((a, b) => {
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        if (a[1] > b[1]) return -1;
        if (a[1] < b[1]) return 1
        return 0;
    });

    //각 타임라인별 입장시 +1, 퇴장시 -1로 객실 체크
    for (const [time, type] of timeline) {
        type === 0 ? cur_room++ : cur_room--;
        max = Math.max(max, cur_room);
    }

    return max;
}

/**
 * 
 * @param {String} time //ex) "15:00"
 * @returns 
 */
const time_to_num = (time) => {
    const [hour, min] = time.split(':').map((el) => Number(el));
    return hour * 60 + min;
}

const book_time1 = [["15:00", "17:00"], ["16:40", "18:20"], ["14:20", "15:20"], ["14:10", "19:20"], ["18:20", "21:20"]];
const book_time2 = [["09:10", "10:10"], ["10:20", "12:20"]];
const book_time3 = [["10:20", "12:30"], ["10:20", "12:30"], ["10:20", "12:30"]];

console.log(solution(book_time1));
console.log(solution(book_time2));
console.log(solution(book_time3));