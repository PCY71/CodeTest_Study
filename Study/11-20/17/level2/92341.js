/* 92341번 문제
주차 요금 계산*/

function solution(fees, records) {
    let answer = [];
    const [basic_time, basic_fee, unit_time, unit_fee] = fees;
    let cars = new Map();
    for (const record of records) {
        const [time, num, status] = record.split(' ');

        //IN이면 시작시간 기록 및 23:59 퇴장시간으로 초기화
        //[시작시간, 퇴장시간, 누적시간]
        if (status === 'IN') {
            cars.set(num, [time, '23:59', cars.get(num) ? cars.get(num)[2] : 0]);
            //OUT이면 퇴장시간 갱신
        } else {
            const cumulative_time = time_to_num(time) - time_to_num(cars.get(num)[0]);
            cars.set(num, ['00:00', '00:00', cars.get(num)[2] + cumulative_time]);
        }
    }

    cars = [...cars].sort((a, b) => a[0] - b[0]);
    for (const car of cars) {
        const [enter, out, cumulative_time] = car[1];
        const parking_time = time_to_num(out) - time_to_num(enter) + cumulative_time;

        //기본요금
        if (parking_time <= basic_time) {
            answer.push(basic_fee);
            continue;
        } else {
            answer.push(basic_fee + Math.ceil((parking_time - basic_time) / unit_time) * unit_fee);
        }
    }
    return answer;
}

/**
 * string 시간을 입력받아 분단위 number로 변환
 * @param {String} time //'12:34' 
 * @returns {Number}
 */
const time_to_num = (time) => {
    const [hour, min] = time.split(':')
    return Number(hour) * 60 + Number(min);
}
const test1 = [[180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]];
const test2 = [[120, 0, 60, 591], ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"]];
const test3 = [[1, 461, 1, 10], ["00:00 1234 IN"]];
console.log(solution(test1[0], test1[1]));
console.log(solution(test2[0], test2[1]));
console.log(solution(test3[0], test3[1]));
