// function solution(info, query) {
//     let answer = [];
//     const infoParse = info.map((el) => el.split(' '));
//     const queryParse = query.map((el) => el.split('and'));

//     for (let i = 0; i < queryParse.length; i++) {
//         const [food, score] = queryParse[i].pop().replace(' ', '').split(' ');
//         queryParse[i].push(food);
//         queryParse[i].push(score);
//     }

//     queryParse.forEach((el) => {
//         const [qLanguage, qPosition, qCareer, qFood, qScore] = el;
//         let matchMember = 0;
//         for (const applicant of infoParse) {
//             const [language, position, career, food, score] = applicant;
//             matchMember = (qLanguage === language && qPosition === position && qCareer === career && qFood === food && qScore <= score)
//                 ? matchMember + 1
//                 : matchMember;
//         }
//         answer.push(matchMember);
//     })

//     return answer;
// }

// const info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];
// const query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"];

// console.log(solution(info, query));