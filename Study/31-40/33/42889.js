function solution(N, stages) {
    const answer = [];
    const user = new Array(N).fill(new Array()).map((el, idx) => [0, 0, idx + 1]); //[실패한 인원, 도달한 인원]

    //각 유저들의 도달 스테이지를 기록
    stages.forEach((stage) => {
        stage--;    //0번지부터 시작이므로        
        if (stage <= N - 1) {
            user[stage][0]++;

        } else {
            stage--;
        }
        //도달한 스테이지들을 기록
        while (stage >= 0) {
            user[stage][1]++;
            stage--;
        }
    })

    user.sort((a, b) => b[0] / b[1] - a[0] / a[1]);
    user.forEach(([fail, user, stage]) => answer.push(stage))

    return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));