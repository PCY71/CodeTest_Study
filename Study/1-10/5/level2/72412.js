/* 72412번 문제
순위 검색*/

function solution(info, queries) {
    /* 효율성 통과 못한 코드
    let answer = [];
  
    const infoParse = info.map((el) => el.split(' '));
    const queryParse = queries.map((el) => el.split(/ and | /g));
    infoParse.sort((a,b) => a[4]-b[4]);
  
    queryParse.forEach((el) => {
        let [qLanguage, qPosition, qCareer, qFood, qScore] = el;
        let matchMember = 0;
        const lower = lowerBound(infoParse, qScore);
        for(let j = lower; j < infoParse.length; j++){
          const [language, position, career, food] = infoParse[j];
          matchMember = ((qLanguage === '-' || qLanguage === language) 
                          &&(qPosition === '-' || qPosition === position) 
                          && (qCareer === '-' || qCareer === career) 
                          && (qFood === '-' || qFood === food))
                ? matchMember + 1
                : matchMember;
        }
        answer.push(matchMember);
    })
  
    return answer;
    */
    let answer = [];
    const infos = getInfo(info);
    queries.map(q => q.split(/ and | |-/gi)
        .filter(el => el !== ""))
        .forEach(query => {
            const score = query.pop();
            const result = getResult(infos, query, score);
            answer.push(result);
        })

    return answer;
}

const lowerBound = (arr, score) => {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = parseInt((left + right) / 2);
        if (Number(arr[mid]) >= Number(score)) right = mid;
        else left = mid + 1;
    }

    return left;
}

const getInfo = (infos) => {
    const info = {};
    infos.forEach(infoStr => {
        const arr = infoStr.split(' ');
        const score = Number(arr.pop());
        const key = arr.join("");
        if (info[key]) info[key].push(score)
        else info[key] = [score];
    })
    for (const key in info) {
        info[key].sort((a, b) => a - b);
    }
    return info;
}

const getResult = (infos, query, score) => {
    const keys = Object.keys(infos);
    return keys.filter(key => query.every(el => key.includes(el)))
        .reduce((acc, key) => acc + infos[key].length - lowerBound(infos[key], score), 0);
}

const info = ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"];
console.log(solution(info, query));