/*176962 문제
과제 진행하기*/

function solution(plans) {
    const answer = [];
    const stack = [];
    const queue = plans.map(([name, start, playtime]) => [name, timeToNum(start), Number(playtime)])
        .sort((a, b) => a[1] - b[1]);
    let prev = queue.shift();

    while (queue.length) {
        const [curName, curTime, curLeft] = queue.shift();
        const passed_time = curTime - prev[1];

        if (prev[2] <= passed_time) {
            answer.push(prev[0]);
            let remaining_time = passed_time - prev[2]

            while (stack.length && remaining_time > 0) {
                let [stackName, stackLeft] = stack.pop();
                if (stackLeft <= remaining_time) {
                    answer.push(stackName);
                    remaining_time -= stackLeft;
                } else {
                    stack.push([stackName, stackLeft - remaining_time]);
                    remaining_time = 0;
                }
            }

            prev = [curName, curTime, curLeft];
        } else {
            stack.push([prev[0], prev[2] - passed_time]);
            prev = [curName, curTime, curLeft];
        }
    }
    answer.push(prev[0]);

    while (stack.length) {
        answer.push(stack.pop()[0])
    }

    return answer;
}

const timeToNum = (time) => {
    const [hour, min] = time.split(':').map((el) => Number(el));
    return hour * 60 + min;
}

const test1 = [["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]];
const test2 = [["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]];
const test3 = [["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]];

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));