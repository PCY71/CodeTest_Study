/* 84021번 문제
퍼즐 조각 채우기*/

let inBound;

// main
function solution(game_board, table) {
    let answer = 0;
    const length = game_board.length;
    inBound = isValueInBound(length);

    const puzzles = []; // 1
    for (let r = 0; r < length; r++) {
        for (let c = 0; c < length; c++) {
            if (table[r][c]) {
                puzzles.push(getPieces(table, r, c, 0, 0));
            }
        }
    }

    for (let rotate = 0; rotate < 4; rotate++) {
        for (let r = 0; r < length; r++) {
            for (let c = 0; c < length; c++) {
                if (!game_board[r][c]) { // 2
                    for (let i = 0; i < puzzles.length; i++) { // 3
                        const puzzle = puzzles[i];
                        const emptySize = getEmptySize(game_board, r, c); // 3-1
                        if (emptySize !== puzzle.length) {
                            continue;
                        }
                        const check = checkPuzzleFit(game_board, puzzle, r, c); // 3-2
                        if (check) { // 3-3
                            puzzles.splice(i, 1);
                            updateBoard(game_board, puzzle, r, c);
                            answer += puzzle.length;
                            break;
                        }
                    }
                }
            }
        }
        game_board = rotateMatrix(game_board);
    }
    return answer;
}

// 퍼즐이 해당 위치에 맞는지 확인
const checkPuzzleFit = (board, puzzle, r, c) =>
    puzzle.every(piece => {
        const { row, col } = piece;
        return inBound(r + row) && inBound(c + col) && board[r + row][c + col] === 0;
    })

// 보드 내 퍼즐이 채워진 부분 값 변경 
const updateBoard = (board, puzzle, r, c) => {
    puzzle.map(piece => {
        const { row, col } = piece;
        board[r + row][c + col] = 1;
    })
}

// 해당 값이 보드의 바운더리 안에 있는지 확인
const isValueInBound = len => val => val >= 0 && val < len;

// table에서 퍼즐 추출
const getPieces = (table, r, c, r_off, c_off) => {
    const len = table.length;
    table[r][c] = 0;
    const pieces = [{
        row: r_off, col: c_off
    }]
    if (inBound(r + 1) && table[r + 1][c]) {
        pieces.push(...getPieces(table, r + 1, c, r_off + 1, c_off));
    }
    if (inBound(r - 1) && table[r - 1][c]) {
        pieces.push(...getPieces(table, r - 1, c, r_off - 1, c_off));
    }
    if (inBound(c + 1) && table[r][c + 1]) {
        pieces.push(...getPieces(table, r, c + 1, r_off, c_off + 1));
    }
    if (inBound(c - 1) && table[r][c - 1]) {
        pieces.push(...getPieces(table, r, c - 1, r_off, c_off - 1));
    }
    return pieces;
}

// 해당 빈 공간의 크기 측정
const getEmptySize = (board, r, c, visited = []) => {
    visited.push({
        row: r, col: c
    });
    const isVisited = (row, col) =>
        visited.some(piece => piece.row === row && piece.col === col)

    let count = 1;
    if (!isVisited(r + 1, c) && inBound(r + 1) && !board[r + 1][c]) {
        count += getEmptySize(board, r + 1, c, visited);
    }
    if (!isVisited(r - 1, c) && inBound(r - 1) && !board[r - 1][c]) {
        count += getEmptySize(board, r - 1, c, visited);
    }
    if (!isVisited(r, c + 1) && inBound(c + 1) && !board[r][c + 1]) {
        count += getEmptySize(board, r, c + 1, visited);
    }
    if (!isVisited(r, c - 1) && inBound(c - 1) && !board[r][c - 1]) {
        count += getEmptySize(board, r, c - 1, visited);
    }
    return count;
}

// 매트릭스 90도 회전
const rotateMatrix = matrix => {
    const length = matrix.length;
    const newMatrix = createNewMatrix(length);
    for (let r = 0; r < length; r++) {
        for (let c = 0; c < length; c++) {
            newMatrix[c][length - 1 - r] = matrix[r][c];
        }
    }
    return newMatrix;
}

// 회전을 위한 새 메트릭스 생성
const createNewMatrix = length => {
    const newMatrix = new Array(length);
    for (let i = 0; i < length; i++) {
        newMatrix[i] = new Array(length);
    }
    return newMatrix;
}

console.log(solution([[1, 1, 0, 0, 1, 0], [0, 0, 1, 0, 1, 0], [0, 1, 1, 0, 0, 1], [1, 1, 0, 1, 1, 1], [1, 0, 0, 0, 1, 0], [0, 1, 1, 1, 0, 0]], [[1, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 0], [0, 1, 1, 0, 1, 1], [0, 0, 1, 0, 0, 0], [1, 1, 0, 1, 1, 0], [0, 1, 0, 0, 0, 0]]));
