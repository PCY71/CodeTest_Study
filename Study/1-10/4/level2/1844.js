
/* 1844번 문제
게임 맵 최단거리*/

function solution(maps) {

    const queue = [[0, 0, 1]];
    const rows = maps.length;
    const columns = maps[0].length;
    const visited = Array.from(Array(rows), () => Array(columns).fill(false));

    while (queue.length) {
        const [y, x, step] = queue.shift();

        //현재 위치가 도착지인지 check
        if (y === rows - 1 && x === columns - 1) {
            return step;
        } else {
            if (!visited[y][x]) {
                //현재 위치에서 접근할 수 있는 장소 queue에 추가
                const moveX = [-1, 0, 1, 0];
                const moveY = [0, 1, 0, -1];
                for (let i = 0; i < 4; i++) {
                    const movedX = x + moveX[i];
                    const movedY = y + moveY[i];
                    if (movedX >= 0 && movedX < columns && movedY >= 0 && movedY < rows && !visited[movedY][movedX] && maps[movedY][movedX] === 1) {
                        queue.push([movedY, movedX, step + 1]);
                    }
                    visited[y][x] = true;
                }
            }
        }
    }

    return -1;
}

const maps1 = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]];
const maps2 = [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]];

console.log(solution(maps1));
console.log(solution(maps2));