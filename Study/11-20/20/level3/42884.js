/* 42884번 문제
단속카메라*/

function solution(routes) {
    let answer = 1;
    routes.sort((a, b) => a[0] - b[0]);

    let cur = routes[0][1];

    for (let i = 1; i < routes.length; i++) {
        if (cur < routes[i][0]) {
            answer++;
            cur = routes[i][1];
        }
        if (cur > routes[i][1]) cur = routes[i][1];
    }

    return answer;
}

console.log(solution([[-20, -15], [-14, -5], [-18, -13], [-5, -3]]));
