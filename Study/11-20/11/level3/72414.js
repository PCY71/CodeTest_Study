/* 42885번 문제
구명보트*/

function solution(play_time, adv_time, logs) {
    const play_time_num = time_to_num(play_time);
    const adv_time_num = time_to_num(adv_time);

    const times = new Array(play_time_num).fill(0);

    logs.forEach((log) => {
        const [start, end] = log.split('-');
        times[time_to_num(start)]++;
        times[time_to_num(end)]--;
    })

    for (let i = 1; i <= play_time_num; i++) {
        times[i] += times[i - 1];
    }
    for (let i = 1; i <= play_time_num; i++) {
        times[i] += times[i - 1];
    }

    let sum = times[adv_time_num - 1];
    let answer = 0;

    for (let i = adv_time_num - 1; i < play_time_num; i++) {
        const ad_view = times[i] - times[i - adv_time_num];

        if (sum < ad_view) {
            sum = ad_view;
            answer = i - adv_time_num + 1;
        }
    }

    return num_to_time(answer);
}

//시간 표기 형식을 숫자로
const time_to_num = (time = '00:00:00') => {
    const [hour, min, sec] = time.split(':').map((el) => Number(el));
    return hour * 3600 + min * 60 + sec;
}

//숫자를 시간 표기 형식으로
const num_to_time = (num = 0) => {
    const hour = Math.floor(num / 3600) < 10 ? '0' + Math.floor(num / 3600).toString() : Math.floor(num / 3600).toString();
    num %= 3600;
    const min = Math.floor(num / 60) < 10 ? '0' + Math.floor(num / 60).toString() : Math.floor(num / 60).toString();
    num %= 60;
    const sec = num < 10 ? '0' + num.toString() : num.toString();

    return `${hour}:${min}:${sec}`
}

const test = [["02:03:55", "00:14:15", ["01:20:15-01:45:14", "00:40:31-01:00:00", "00:25:50-00:48:29", "01:30:59-01:53:29", "01:37:44-02:02:30"]],
["99:59:59", "25:00:00", ["69:59:59-89:59:59", "01:00:00-21:00:00", "79:59:59-99:59:59", "11:00:00-31:00:00"]],
["50:00:00", "50:00:00", ["15:36:51-38:21:49", "10:14:18-15:36:51", "38:21:49-42:51:45"]]];

console.log(solution(test[0][0], test[0][1], test[0][2]));
console.log(solution(test[1][0], test[1][1], test[1][2]));
console.log(solution(test[2][0], test[2][1], test[2][2]));