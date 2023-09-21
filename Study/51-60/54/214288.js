/*214288 문제
상담원 인원*/

function solution(k, n, reqs) {
    let answer = 0;
    let mentor_num = new Array(k + 1).fill(1);
    n -= k;

    const cal_resttime = (mentors) => {
        const queue = [];
        let cur_time = 0;
        let sum = 0;

        const refresh_queue = (time) => {
            for (let i = 1; i <= k; i++) {
                for (let j = 0; j < queue[i].length; j++) {
                    queue[i][j] -= (time - cur_time);
                    if (queue[i][j] < 0) queue[i][j] = 0;
                }
            }
            cur_time = time;
        }

        for (let i = 0; i < mentors.length; i++) {
            queue.push(Array(mentors[i]).fill(0));
        }

        for (const [time, len, type] of reqs) {
            refresh_queue(time);
            const next_mentor_idx = queue[type].findIndex((a) => a === 0);

            //쉬는 멘토가 없는 경우
            if (next_mentor_idx === -1) {
                const idx = search_min_idx(queue[type]);
                const left = queue[type][idx];
                sum += left;
                queue[type][idx] += len;
            } else {
                //쉬는 멘토가 있는 경우
                queue[type][next_mentor_idx] = len;
            }
        }

        return sum;
    }

    const search_min_idx = (arr) => {
        let idx = 0;
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                idx = i;
                min = arr[i];
            }
        }
        return idx;
    }

    while (n > 0) {
        //멘토 추가시 가장 대기 시간 합이 적은 곳으로 배정
        let min_idx = Number.MAX_SAFE_INTEGER;
        let min_sum = Number.MAX_SAFE_INTEGER;

        for (let i = 1; i <= k; i++) {
            let temp_sum = cal_resttime(mentor_num.map((el, idx) => idx === i ? el + 1 : el));
            if (temp_sum < min_sum) {
                min_idx = i;
                min_sum = temp_sum;
            }
        }
        mentor_num = mentor_num.map((el, idx) => idx === min_idx ? el + 1 : el);
        n--;

    }

    return cal_resttime(mentor_num);
}

console.log(solution(3, 5, [[10, 60, 1], [15, 100, 3], [20, 30, 1], [30, 50, 3], [50, 40, 1], [60, 30, 2], [65, 30, 1], [70, 100, 2]]));
console.log(solution(2, 3, [[5, 55, 2], [10, 90, 2], [20, 40, 2], [50, 45, 2], [100, 50, 2]]));