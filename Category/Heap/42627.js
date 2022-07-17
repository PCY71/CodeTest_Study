/* 42627번 문제
디스크 컨트롤러*/

function solution(jobs) {
    let answer = 0;
    let time = 0;
    let idx = 0;
    let priorityQueue = [];

    //시간순으로 jobs를 정렬
    jobs.sort((a, b) => a[0] - b[0]);

    //처리할 작업이 존재하는 동안 루프
    while (jobs.length > idx || priorityQueue.length > 0) {

        if (jobs.length > idx && time >= jobs[idx][0]) {
            priorityQueue.push(jobs[idx++]);
            priorityQueue.sort((a, b) => a[1] - b[1]);
            continue;
        }

        //아직 작업이 남았는데 시간을 기다리는 경우
        if (priorityQueue.length === 0) {
            time = jobs[idx][0];
        } else {
            //현재 작업을 진행
            const [start, work] = priorityQueue.shift();
            time += work;
            answer += time - start;
        }

    }

    return Math.floor(answer / jobs.length);
}

const jobs = [[0, 3], [1, 9], [2, 6]];

console.log(solution(jobs))