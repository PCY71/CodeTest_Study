/* 42888번 문제
오픈채팅방*/

function solution(record) {
    let answer = [];
    let user = {};
    let logs = [];

    for (let rec of record) {
        const [state, uid, nickname] = rec.split(' ');

        if (state === 'Enter') {
            user[uid] = nickname;
            logs.push([state, uid]);
        } else if (state === 'Leave') {
            logs.push([state, uid]);
        } else {
            user[uid] = nickname;
        }
    }

    for (const log of logs) {
        if (log[0] === 'Enter') {
            answer.push(`${user[log[1]]}님이 들어왔습니다.`)
        } else {
            answer.push(`${user[log[1]]}님이 나갔습니다.`)
        }
    }

    return answer;
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"];
console.log(solution(record));