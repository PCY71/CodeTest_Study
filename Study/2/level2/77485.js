/* 77485번 문제
행렬 테두리 회전하기*/

function solution(rows, columns, queries) {
    let answer = [];

    //행렬 초기화
    let matrix = Array.from(Array(rows),
        (el, idx) => Array(columns)
            .fill(idx * columns).map((el, i) => el + i + 1));


    const rotate = (query) => {
        const [y1, x1, y2, x2] = query;
        let temp = matrix[y1 - 1][x1 - 1];
        let min = temp;
        //오른쪽이동
        for (let right = x1; right < x2; right++) {
            [temp, matrix[y1 - 1][right]] = [matrix[y1 - 1][right], temp];
            min = temp < min ? temp : min
        }
        //아래로 이동
        for (let down = y1; down < y2; down++) {
            [temp, matrix[down][x2 - 1]] = [matrix[down][x2 - 1], temp];
            min = temp < min ? temp : min
        }
        //왼쪽로 이동
        for (let left = x2 - 2; left >= x1 - 1; left--) {
            [temp, matrix[y2 - 1][left]] = [matrix[y2 - 1][left], temp];
            min = temp < min ? temp : min
        }
        //위로 이동
        for (let up = y2 - 2; up >= y1 - 1; up--) {
            [temp, matrix[up][x1 - 1]] = [matrix[up][x1 - 1], temp];
            min = temp < min ? temp : min
        }

        return min;
    }

    for (const query of queries) {
        answer.push(rotate(query))
    }

    return answer;
}

const rows1 = 6;
const rows2 = 3;
const rows3 = 100;

const columns1 = 6;
const columns2 = 3;
const columns3 = 97;

const queries1 = [[2, 2, 5, 4], [3, 3, 6, 6], [5, 1, 6, 3]];
const queries2 = [[1, 1, 2, 2], [1, 2, 2, 3], [2, 1, 3, 2], [2, 2, 3, 3]];
const queries3 = [[1, 1, 100, 97]];

console.log(solution(rows1, columns1, queries1));
console.log(solution(rows2, columns2, queries2));
console.log(solution(rows3, columns3, queries3));

