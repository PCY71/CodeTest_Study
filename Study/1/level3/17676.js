/* 17676번 문제
추석트래픽*/

function solution(lines) {

    let max = 1;
    let count = 0;
    const eventArr = [];

    //시간 계산 함수
    const calculateTime = (time) => {
        const [hour, min, sec] = time.split(':');
        return (hour * 60 * 60 + min * 60 + Number(sec)) * 1000;
    }

    for (const line of lines) {
        const [date, time, duration] = line.split(' ');
        const end = calculateTime(time);
        const start = end - duration.replace('s', '') * 1000 + 1;
        eventArr.push({ state: "start", time: start });
        eventArr.push({ state: "end", time: end + 1000 });
    }
    eventArr.sort((a, b) => a.time - b.time);

    for (const event of eventArr) {
        if (event.state === "start") {
            count++
        } else {
            count--
        }
        max = count > max ? count : max;
    }

    return max;
}

const lines = ["2016-09-15 00:00:00.000 2.3s", "2016-09-15 23:59:59.999 0.1s"];

console.log(solution(lines));