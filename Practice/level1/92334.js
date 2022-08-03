/* 92334번 문제
신고 결과 받기*/

function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    let reportRecord = {}

    for (const r of report) {
        const [reporter, troll] = r.split(' ');
        if (reportRecord[troll]) {
            //이미 신고당한 사람이면 신고자 추가
            reportRecord[troll].add(reporter);
        } else {
            //첫 신고
            reportRecord[troll] = new Set().add(reporter);
        }

    }

    //신고 누적이 k를 넘었는지 체크
    for (const report in reportRecord) {
        if (reportRecord[report].size >= k) {
            for (let idx = 0; idx < answer.length; idx++) {
                if (reportRecord[report].has(id_list[idx])) answer[idx] = answer[idx] + 1;
            }
        }
    }
    return answer;
}

const id_list1 = ["muzi", "frodo", "apeach", "neo"];
const id_list2 = ["con", "ryan"];
const report1 = ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"];
const report2 = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k1 = 2;
const k2 = 3;

console.log(solution(id_list1, report1, k1));
console.log(solution(id_list2, report2, k2));