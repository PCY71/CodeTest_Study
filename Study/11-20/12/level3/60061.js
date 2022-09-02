/* 60061번 문제
기둥과 보 설치*/

function solution(n, build_frame) {
    let answer = [];
    for (const frame of build_frame) {
        const [x, y, type, action] = frame;
        //action 1 => 설치, 0 => 삭제
        action ? build_fr(answer, x, y, type) : delete_fr(answer, x, y, type);
    }
    //정렬
    answer.sort((a, b) => {
        //x기준 오른차순
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;

        //y기준 오름차순
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;

        //기둥이 보보다 먼저
        if (a[2] > b[2]) return 1;
        if (a[2] < b[2]) return -1;

        return 0;
    })

    return answer;
}


const check_column = (ans, x, y) => {
    /*기둥은 바닥 위에 있거나 
    보의 한쪽 끝 부분 위에 있거나, 
    또는 다른 기둥 위에 있어야 합니다.*/

    //바닥 기둥
    return y === 0
        //현재 위치에 보
        || ans.find(([a, b, fr]) => a === x && b === y && fr === 1)
        //좌측에 보
        || ans.find(([a, b, fr]) => a === x - 1 && b === y && fr === 1)
        //하단에 기둥
        || ans.find(([a, b, fr]) => a === x && b === y - 1 && fr === 0)
}
const check_row = (ans, x, y) => {
    /*보는 한쪽 끝 부분이 기둥 위에 있거나, 
    또는 양쪽 끝 부분이 다른 보와 동시에 연결되어 있어야 합니다.*/

    //아래에 기둥
    return ans.find(([a, b, fr]) => a === x && b === y - 1 && fr === 0)
        //우측 아래에 기둥
        || ans.find(([a, b, fr]) => a === x + 1 && b === y - 1 && fr === 0)
        //양 옆에 보가 존재
        || (ans.find(([a, b, fr]) => a === x + 1 && b === y && fr === 1)
            && ans.find(([a, b, fr]) => a === x - 1 && b === y && fr === 1))
}
const build_fr = (ans, x, y, frame) => {
    if (frame) {
        if (check_row(ans, x, y)) ans.push([x, y, frame]);
    } else {
        if (check_column(ans, x, y)) ans.push([x, y, frame]);
    }
}

const delete_fr = (ans, x, y, frame) => {
    const copy = ans.slice();
    const idx = ans.findIndex(([a, b, fr]) => a === x && b === y && fr === frame);

    copy.splice(idx, 1);

    for (const copy_frame of copy) {
        const [copyX, copyY, copyFrame] = copy_frame;
        if (copyFrame) {
            if (!check_row(copy, copyX, copyY)) return;
        } else {
            if (!check_column(copy, copyX, copyY)) return;
        }
    }

    ans.splice(idx, 1);
}

console.log(solution(5, [[1, 0, 0, 1], [1, 1, 1, 1], [2, 1, 0, 1], [2, 2, 1, 1], [5, 0, 0, 1], [5, 1, 0, 1], [4, 2, 1, 1], [3, 2, 1, 1]]));
console.log(solution(5, [[0, 0, 0, 1], [2, 0, 0, 1], [4, 0, 0, 1], [0, 1, 1, 1], [1, 1, 1, 1], [2, 1, 1, 1], [3, 1, 1, 1], [2, 0, 0, 0], [1, 1, 1, 0], [2, 2, 0, 1]]));