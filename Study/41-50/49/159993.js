/*159993 문제
미로 탈출*/

function solution(maps) {
    let start = [0, 0];
    let lever = [0, 0];

    maps.forEach((row, idx) => {
        if (row.includes('S')) start = [idx, row.indexOf('S')];
        if (row.includes('L')) lever = [idx, row.indexOf('L')];
    });

    const dist1 = bfs(start, [...maps.map(item => item.split(''))], 'L');
    const dist2 = bfs(lever, [...maps.map(item => item.split(''))], 'E');

    if (dist1 === -1 || dist2 === -1) return -1;

    return dist1 + dist2;
}

const bfs = (start, map, target) => {
    let step = 0;
    const dirX = [-1, 1, 0, 0];
    const dirY = [0, 0, -1, 1];
    const queue = [start];
    const n = map.length;
    const m = map[0].length;

    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            const [curX, curY] = queue.shift();

            for (let j = 0; j < 4; j++) {
                const [nx, ny] = [curX + dirX[j], curY + dirY[j]];
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && map[nx][ny] !== 'X') {
                    if (map[nx][ny] === target) return step + 1;

                    queue.push([nx, ny]);
                    map[nx][ny] = 'X';
                }
            }
        }
        step++;
    }

    return -1;
}

const map1 = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"];
const map2 = ["LOOXS", "OOOOX", "OOOOO", "OOOOO", "EOOOO"];

console.log(solution(map1));
console.log(solution(map2));