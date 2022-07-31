/* 17678번 문제
게임 맵 최단거리*/

function solution(n, t, m, timetable) {

    let crewArr = timetable
        .map((el) => timeToNum(el))
        .sort((a, b) => a - b);

    for (let bus = 0; bus < n; bus++) {
        //현재 시간
        const curTime = timeToNum('09:00') + bus * t;
        //현재 줄 선 사람 중 이번에 탈 사람
        const waiting = [];
        for (let i = 0; i < m; i++) {
            if (crewArr[i] <= curTime && waiting.length < m) {
                waiting.push(crewArr.shift());
                i--;
            } else {
                break;
            }
        }

        //막차 조건 체크
        if (bus === n - 1) {
            if (waiting.length === m) {
                //막차인데 가득 찼으면 마지막 사람보다 1분 먼저오기
                return numToTime(waiting[waiting.length - 1] - 1)
            } else {
                //막차인데 자리 있으면 시간 맞춰오기
                return numToTime(curTime);
            }

        }
        //막차가 아니면 waiting 멤버를 태우고 간다

    }


    return '00:00';
}
//시간을 number로 계산
const timeToNum = (time) => {
    const [hour, min] = time.split(":");
    return Number(hour) * 60 + Number(min);
}
//number를 시간으로 계산
const numToTime = (num) => {
    let hour = Math.floor(num / 60) < 10 ? "0" + Math.floor(num / 60) : "" + Math.floor(num / 60);
    let min = num % 60 < 10 ? "0" + num % 60 : "" + num % 60;
    return hour + ":" + min;
}

const n = [1, 2, 2, 1, 1, 10];
const t = [1, 10, 1, 1, 1, 60];
const m = [5, 2, 2, 5, 1, 45];
const timetable = [["08:00", "08:01", "08:02", "08:03"],
["09:10", "09:09", "08:00"],
["09:00", "09:00", "09:00", "09:00"],
["00:01", "00:01", "00:01", "00:01", "00:01"],
["23:59"],
["23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59", "23:59"]];

for (let i = 0; i < n.length; i++) {
    console.log(solution(n[i], t[i], m[i], timetable[i]));
}