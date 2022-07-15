/* 42576번 문제
완주하지 못한 선수*/

function solution(participant, completion) {
    /* Hash맵 사용하지 않은 솔루션
    // 참가자 목록 정렬
    let sortedPart = participant.slice().sort();
    // 완주자 목록 정렬
    let sortedComple = completion.slice().sort();

    // 참가했으나 완주하지 못한 선수를 return
    for(let i = 0; i < sortedPart.length; i++){
        if(sortedPart[i] !== sortedComple[i]) return sortedPart[i];
    }

    return '';
    */
    let map = new Map();

    for (const part of participant) {
        //동명이인이 아닌 경우
        if (!map.get(part)) {
            map.set(part, 1);
        } else {
            //이름이 중복된 경우
            map.set(part, map.get(part) + 1);
        }
    }

    //완주자 명단만큼 map에서 제거
    for (const comple of completion) {
        map.set(comple, map.get(comple) - 1);
    }

    //참가자들 중 완주하지 못한 사람을 검색
    for (const part of participant) {
        if (map.get(part)) return part
    }

}
const part1 = ["leo", "kiki", "eden"];
const part2 = ["marina", "josipa", "nikola", "vinko", "filipa"];
const part3 = ["mislav", "stanko", "mislav", "ana"];

const comple1 = ["eden", "kiki"];
const comple2 = ["josipa", "filipa", "marina", "nikola"];
const comple3 = ["stanko", "ana", "mislav"];

console.log(solution(part1, comple1));
console.log(solution(part2, comple2));
console.log(solution(part3, comple3));
