/* 42586번 문제
기능개발*/

function solution(progresses, speeds) {
    let day = new Array();
    let deploy = new Array();

    // 작업에 소요되는 day
    for (let i = 0; i < progresses.length; i++) {
        day[i] = Math.ceil((100 - progresses[i]) / speeds[i]);
    }

    //첫 배포
    deploy = [1];
    for (let i = 1; i < day.length; i++) {
        //추가되는 배포가 이전 작업보다 먼저 완료된 경우
        if (day[i] <= day[i - 1]) {
            deploy[deploy.length - 1]++;
            day[i] = day[i - 1];
        } else {
            //이전 작업 배포시 다음 progress가 작업중인 경우
            deploy.push(1);
        }
    }

    return deploy;
}

const progresses1 = [93, 30, 55];
const progresses2 = [95, 90, 99, 99, 80, 99];
const speeds1 = [1, 30, 5];
const speeds2 = [1, 1, 1, 1, 1, 1];

console.log(solution(progresses1, speeds1));
console.log(solution(progresses2, speeds2));