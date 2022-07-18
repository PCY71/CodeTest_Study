/* 42840번 문제
모의고사*/

function solution(answers) {
    let exam = [
        { num: 1, pattern: [1, 2, 3, 4, 5], score: 0, },
        { num: 2, pattern: [2, 1, 2, 3, 2, 4, 2, 5], score: 0, },
        { num: 3, pattern: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], score: 0, },
    ]

    //채점
    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < 3; j++) {
            if (answers[i] === exam[j].pattern[i % exam[j].pattern.length]) {
                exam[j].score++;
            }
        }
    }

    //정렬
    exam.sort(function (a, b) {
        if (a.score > b.score) {
            return -1;
        }
        if (a.score < b.score) {
            return 1;
        }
        return 0;
    })

    let max = exam[0].score;
    let answer = [];

    for (let j = 0; j < exam.length; j++) {
        if (exam[j].score < max) break;
        answer.push(exam[j].num)
    }

    return answer;
}

const answers1 = [1, 2, 3, 4, 5];
const answers2 = [1, 3, 2, 4, 2];

console.log(solution(answers1));
console.log(solution(answers2));