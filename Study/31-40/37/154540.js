/*154540번 문제
무인도 여행*/

function solution(maps) {
    const rowLen = maps.length;
    const colLen = maps[0].length;
    let answer = [];

    const visited = Array.from(Array(rowLen), () => Array(colLen).fill(false));

    const isValid = (row, col) => row >= 0 && row < rowLen && col >= 0 && col < colLen;

    const dfs = (row, col) => {
        if (!isValid(row, col) || maps[row][col] === 'X' || visited[row][col]) return 0;
        visited[row][col] = true;

        return Number(maps[row][col]) + dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1);
    }

    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (!visited[i][j] && maps[i][j] !== "X") {
                answer = [...answer, dfs(i, j)]
            }
        }
    }

    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}

const map1 = ["X591X", "X1X5X", "X231X", "1XXX1"];
const map2 = ["XXX", "XXX", "XXX"];

console.log(solution(map1));
console.log(solution(map2));