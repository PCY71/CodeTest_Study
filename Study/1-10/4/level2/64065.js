/* 64065번 문제
튜플*/

function solution(s) {
    //내용 배열화
    let arr = s.slice(2, -2)
        .replace(/{/gi, '')
        .split('},')
        .map((el) => el.split(',').map(Number))
        .sort((a, b) => a.length - b.length);
    let answer = [];

    for (let i = 0; i < arr.length; i++) {
        //새로 추가된 case만 answer에 push
        if (i === 0) {
            answer.push(arr[0][0]);
            continue;
        }
        let dif = arr[i].filter((el) => !arr[i - 1].includes(el));
        answer.push(dif[0]);
    }

    return answer;
}


const s1 = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
const s2 = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
const s3 = "{{20,111},{111}}";
const s4 = "{{123}}";
const s5 = "{{4,2,3},{3},{2,3,4,1},{2,3}}";

console.log(solution(s1));
console.log(solution(s2));
console.log(solution(s3));
console.log(solution(s4));
console.log(solution(s5));