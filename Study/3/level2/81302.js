/* 81302번 문제
거리두기 확인하기*/

function solution(places) {
    var answer = [];
    const checkDistance = (room) => {
        let matrix = [];

        for (let seat of room) {
            matrix.push([...seat])
        }
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                //사람이 존재하면 주변 체크
                if (matrix[i][j] === 'P') {
                    //상하좌우 체크
                    if (i > 0 && matrix[i - 1][j] !== 'X') {
                        if (matrix[i - 1][j] === 'P' || (i > 1 && matrix[i - 2][j] === 'P')) return 0;
                    }
                    if (i < matrix.length - 1 && matrix[i + 1][j] !== 'X') {
                        if (matrix[i + 1][j] === 'P' || (i < matrix.length - 2 && matrix[i + 2][j] === 'P')) return 0;
                    }
                    if (j > 0 && matrix[i][j - 1] !== 'X') {
                        if (matrix[i][j - 1] === 'P' || (j > 1 && matrix[i][j - 2] === 'P')) return 0;
                    }
                    if (j < matrix[i].length - 1 && matrix[i][j + 1] !== 'X') {
                        if (matrix[i][j + 1] === 'P' || (j < matrix[i].length - 2 && matrix[i][j + 2] === 'P')) return 0
                    };

                    //대각선의 경우 파티션 체크 각 사이가 하나라도 파티션이 아니면 미준수
                    //좌상
                    if (i > 0 && j > 0 && matrix[i - 1][j - 1] === 'P') {
                        if (matrix[i - 1][j] !== 'X' || matrix[i][j - 1] !== 'X') return 0;
                    }
                    //우상
                    if (i > 0 && j < matrix[i].length - 1 && matrix[i - 1][j + 1] === 'P') {
                        if (matrix[i - 1][j] !== 'X' || matrix[i][j + 1] !== 'X') return 0;
                    }
                    //우하
                    if (i < matrix.length - 1 && j < matrix[i].length - 1 && matrix[i + 1][j + 1] === 'P') {
                        if (matrix[i + 1][j] !== 'X' || matrix[i][j + 1] !== 'X') return 0;
                    }
                    //좌하
                    if (i < matrix.length - 1 && j > 0 && matrix[i + 1][j - 1] === 'P') {
                        if (matrix[i + 1][j] !== 'X' || matrix[i][j - 1] !== 'X') return 0;
                    }
                }

            }
        }

        return 1;
    }

    for (const place of places) {
        answer.push(checkDistance(place))
    }
    return answer;
}

const places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
console.log(solution(places));
