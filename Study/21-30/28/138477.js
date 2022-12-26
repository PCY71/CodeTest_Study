/* 138477번 문제
명예의 전당*/

function solution(k, score) {
    const answer = [];
    let hall = [];

    score.forEach((dailyScore) => {
        if (answer.length < k) {
            hall.push(dailyScore);
        } else {
            if (hall[hall.length - 1] < dailyScore) {
                hall[hall.length - 1] = dailyScore;
            }
        }
        hall.sort((a, b) => b - a);
        answer.push(hall.at(-1))
    })
    return answer;
}

const day1 = 3;
const day2 = 4;
const score1 = [10, 100, 20, 150, 1, 100, 200];
const score2 = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

console.log(solution(day1, score1));
console.log(solution(day2, score2));