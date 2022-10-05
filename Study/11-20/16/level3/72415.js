/* 72415번 문제
카드 짝 맞추기*/
//문제 잘못 이해해서 다시 풀어야 함

function solution(board, r, c) {
    let answer = 0;
    let posObj = new Object();
    let selected = 0;

    for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 4; row++) {
            const card = board[row][col];
            const pos = [col, row];
            if (card !== 0) {
                posObj[card] = posObj[card] ? [...posObj[card], ...pos] : pos
            }
        }
    }

    let keys = Object.keys(posObj);


    /**
     * 다음 카드의 위치로 이동하고 그만큼 answer의 이동수를 증가시키는 함수
     * @returns 
     */
    const findNext = () => {
        //현재 위치에 카드가 있는지 체크
        if (board[r][c] !== 0) {
            selected = board[r][c];
            return;
        }
        //같은 행에 카드가 있는지 체크
        for (let i = 0; i < 4; i++) {
            if (board[r][i] !== 0) {
                selected = board[r][i];
                c = i;
                answer++;
                return;
            }
        }

        //같은 열에 카드가 있는지 체크
        for (let i = 0; i < 4; i++) {
            if (board[i][c] !== 0) {
                selected = board[i][c];
                r = i;
                answer++;
                return;
            }
        }

        //같은 행렬에 카드가 없는 경우 남은 카드중 첫 카드의 좌표로 이동
        [r, c] = posObj[keys[0]].slice(0, 2);
        selected = board[r][c];
        answer = answer + 2;
        return;
    }

    /**
     * 현재 선택된 카드번호의 짝의 위치로 이동 및 answer 조작수 증가
     * @param {Number} num //선택된 카드번호
     */
    const movePair = (num) => {
        let [c1, r1, c2, r2] = posObj[num];
        let count = 0;
        if (c1 !== c2) count++;
        if (r1 !== r2) count++;
        answer += count;

        [r, c] = c1 === c && r1 === r ? [r2, c2] : [r1, c1];
    }

    /**
     * 현재 선택된 카드번호 pair를 board 및 object에서 삭제
     * @param {Number} num 
     */
    const deletePair = (num) => {
        let [c1, r1, c2, r2] = posObj[num];
        board[r1][c1] = 0;
        board[r2][c2] = 0;

        delete posObj[num];
        keys = Object.keys(posObj);
    }

    while (keys.length > 0) {
        //다음 타겟 찾기
        findNext();
        //짝으로 이동
        movePair(selected);
        //엔터 2번 추가
        answer = answer + 2;
        //카드 제거
        deletePair(selected);
    }

    return answer;
}

const board1 = [[1, 0, 0, 3], [2, 0, 0, 0], [0, 0, 0, 2], [3, 0, 1, 0]];
const board2 = [[3, 0, 0, 2], [0, 0, 1, 0], [0, 1, 0, 0], [2, 0, 0, 3]];
const board3 = [[1, 5, 0, 2], [6, 4, 3, 0], [0, 2, 1, 5], [3, 0, 6, 4]];

const r1 = 1;
const r2 = 0;
const r3 = 0;

const c1 = 0;
const c2 = 1;
const c3 = 0;

console.log(solution(board1, r1, c1));
console.log(solution(board2, r2, c2));
console.log(solution(board3, r3, c3));