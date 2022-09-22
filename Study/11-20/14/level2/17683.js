/* 17683번 문제
방금그곡*/

function solution(m, musicinfos) {
    m = str_to_melody(m).join('');

    let answer = ['', 0];
    for (let idx = 0; idx < musicinfos.length; idx++) {
        let [start, end, title, sheet] = musicinfos[idx].split(',');
        const play_time = time_to_num(end) - time_to_num(start);
        sheet = str_to_melody(sheet);

        let radio_play = ''
        for (let i = 0; i < play_time; i++) {
            radio_play += sheet[i % sheet.length];
        }

        if (radio_play.includes(m)) {
            if (play_time > answer[1]) answer = [title, play_time]
        }

    }

    return answer[1] > 0 ? answer[0] : "(None)";
}

/**
 * string 시간을 입력받아 number 초단위 숫자로 변환한 결과를 return
 * @param {String} time //'12:00' 
 * @returns {Number} number
 */
const time_to_num = (time) => {
    return time.split(':').map((num) => Number(num))
        .reduce((acc, cur, idx) => idx === 0 ? acc + cur * 60 : acc + cur, 0);
}

/**
 * 멜로디 묶음을 입력받아 Array로 구분해서 return
 * #의 경우는 소문자로 치환
 * @param {String} str 
 * @returns {Array}
 */
const str_to_melody = (str) => {
    let answer = [];

    for (let i = 0; i < str.length; i++) {
        let cur = str.charAt(i);
        if (i === str.length - 1) {
            answer.push(cur);
            break;
        }

        let next = str.charAt(i + 1);

        if (next !== '#') {
            answer.push(cur);
        } else {
            answer.push(cur.toLowerCase());
            i++;
        }
    }

    return answer;
}


console.log(solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]));
console.log(solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]));
console.log(solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]));