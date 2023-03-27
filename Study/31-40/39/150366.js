/*150366번 문제
표 병합*/

function solution(commands) {
    const answer = [];
    const db = Array.from(Array(50), () => Array(50).fill().map((v) => ['', -1])); //[data, group번호] group이 없는 경우 -1
    const group = [];   //[data, [그룹에 속한 cell번호들]];
    for (const cmd of commands) {
        parse_query(cmd, db, group, answer);
    }
    return answer;
}


const cell_to_num = (r, c) => r * 50 + c;
const num_to_cell = (num) => [Math.floor(num / 50), num % 50];

const parse_query = (query, db, group, answer) => {
    const command = query.split(' ');
    switch (command[0]) {
        case "UPDATE":
            //데이터 입력
            if (command.length === 4) {
                const [update, r, c, v] = command;
                update_add(r, c, v, db, group);
            } else {
                //데이터 갱신
                const [update, v1, v2] = command;
                update_renew(v1, v2, db, group);
            }
            break;
        case "MERGE":
            const [mer, r1, c1, r2, c2] = command;
            merge(r1, c1, r2, c2, db, group);
            break;
        case "UNMERGE":
            const [unmer, un_r, un_c] = command;
            unmerge(un_r, un_c, db, group);
            break;
        case "PRINT":
            const [prt, p_r, p_c] = command;
            print(p_r, p_c, db, group, answer);
            break;
        default:
            console.log('you input wrong command');
            break;
    }
}

const update_add = (r, c, value, db, group) => {
    // 그룹에 속한 경우 (그룹에 속한 경우 값을 매번 갱신하지 않고 그룹값만 갱신)
    if (db[r - 1][c - 1][1] !== -1) {
        const groupNum = db[r - 1][c - 1][1];
        group[groupNum][0] = String(value);
    } else {
        db[r - 1][c - 1][0] = String(value);
    }
}

const update_renew = (val1, val2, db, group) => {
    //그룹의 data를 검색 후 변경
    for (const el of group) {
        if (el[0] === val1) el = el.map(([data, elements]) => [val2, elements]);
    }
    //각 셀의 data를 검색 후 변경
    for (let r = 0; r < 50; r++) {
        if (db[r].some((item) => item[0] === val1)) {
            db[r] = db[r].map((el) => el[0] === val1 ? [val2, el[1]] : el);
        }
    }
}

const merge = (r1, c1, r2, c2, db, group) => {
    //서로 같은 칸을 입력한 경우 무시
    if (r1 === r2 && c1 === c2) return;

    const groupNum1 = db[r1 - 1][c1 - 1][1];
    const groupNum2 = db[r2 - 1][c2 - 1][1];
    const temp_data1 = groupNum1 !== -1 ? group[groupNum1][0] : db[r1 - 1][c1 - 1][0];
    const temp_data2 = groupNum2 !== -1 ? group[groupNum2][0] : db[r2 - 1][c2 - 1][0];
    const data = temp_data1 ? temp_data1 : temp_data2
    //둘 다 그룹이 있는 경우 모두 합치고 새 그룹 생성
    if (groupNum1 !== -1 && groupNum2 !== -1) {
        const new_el = [...group[groupNum1][1], ...group[groupNum2][1]];
        group.push([data, new_el]);
        for (const el of new_el) {
            const [new_r, new_c] = num_to_cell(el);
            db[new_r][new_c][1] = group.length - 1;
        }
    } else if (groupNum1 !== -1 || groupNum2 !== -1) {
        // 기존 그룹에 하나가 추가되는 경우
        if (groupNum1 !== -1) {
            group[groupNum1][0] = data;
            group[groupNum1][1].push(cell_to_num(r2 - 1, c2 - 1));
            db[r2 - 1][c2 - 1][1] = groupNum1;
        } else {
            group[groupNum2][0] = data;
            group[groupNum2][1].push(cell_to_num(r1 - 1, c1 - 1));
            db[r1 - 1][c1 - 1][1] = groupNum2;
        }
    } else {
        // 새 그룹 추가
        group.push([data, [cell_to_num(r1 - 1, c1 - 1), cell_to_num(r2 - 1, c2 - 1)]]);
        db[r1 - 1][c1 - 1][1] = db[r2 - 1][c2 - 1][1] = group.length - 1;
    }

}

const unmerge = (r, c, db, group) => {
    const data = group[db[r - 1][c - 1][1]][0];
    const group_el = group[db[r - 1][c - 1][1]][1];
    //기존 소속된 그룹멤버들 번호 해제 및 값 초기화
    for (const el of group_el) {
        const [new_r, new_c] = num_to_cell(el);
        db[new_r][new_c] = ['', -1];
    }
    //값이 존재하던 경우 r,c위치의 셀이 값을 유지
    db[r - 1][c - 1][0] = data;
}

const print = (r, c, db, group, answer) => {
    const groupNum = db[r - 1][c - 1][1];
    const data = groupNum !== -1 ? group[groupNum][0] : db[r - 1][c - 1][0];
    data ? answer.push(data) : answer.push('EMPTY');
}

const command1 = ["UPDATE 1 1 menu", "UPDATE 1 2 category", "UPDATE 2 1 bibimbap", "UPDATE 2 2 korean", "UPDATE 2 3 rice", "UPDATE 3 1 ramyeon", "UPDATE 3 2 korean", "UPDATE 3 3 noodle", "UPDATE 3 4 instant", "UPDATE 4 1 pasta", "UPDATE 4 2 italian", "UPDATE 4 3 noodle", "MERGE 1 2 1 3", "MERGE 1 3 1 4", "UPDATE korean hansik", "UPDATE 1 3 group", "UNMERGE 1 4", "PRINT 1 3", "PRINT 1 4"];
const command2 = ["UPDATE 1 1 a", "UPDATE 1 2 b", "UPDATE 2 1 c", "UPDATE 2 2 d", "MERGE 1 1 1 2", "MERGE 2 2 2 1", "MERGE 2 1 1 1", "PRINT 1 1", "UNMERGE 2 2", "PRINT 1 1"];
const command3 = ["UPDATE 1 1 menu", "MERGE 1 1 1 2", "MERGE 1 1 1 3", "MERGE 1 1 1 4", "MERGE 1 2 1 3", "UPDATE 1 1 hansik", "PRINT 1 1", "PRINT 1 2", "PRINT 1 3", "PRINT 1 4"];

console.log(solution(command1));
console.log(solution(command2));
console.log(solution(command3));