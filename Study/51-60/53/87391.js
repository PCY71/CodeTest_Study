/*87391 문제
공 이동 시뮬레이션*/

function solution(n, m, x, y, queries) {
    let minX = x, maxX = x;
    let minY = y, maxY = y;

    for (let i = queries.length - 1; i >= 0; i--) {
        const [order, dx] = queries[i];
        switch (order) {
            //열 감소
            case 0:
                maxY += dx;
                if (maxY > m - 1) maxY = m - 1;
                if (minY !== 0) minY += dx;
                break;
            // 열 증가
            case 1:
                minY -= dx;
                if (minY < 0) minY = 0;
                if (maxY !== m - 1) maxY -= dx;
                break;
            // 행 감소
            case 2:
                maxX += dx;
                if (maxX > n - 1) maxX = n - 1;
                if (minX !== 0) minX += dx;
                break;
            // 행 증가
            case 3:
                minX -= dx;
                if (minX < 0) minX = 0;
                if (maxX !== n - 1) maxX -= dx;
                break;
            default:
                console.log('Input wrong order');
                break;
        }

    }
    return minY > m - 1 || maxY < 0 || minX > n - 1 || maxX < 0
        ? 0
        : (maxX - minX + 1) * (maxY - minY + 1);
}

console.log(solution(2, 2, 0, 0, [[2, 1], [0, 1], [1, 1], [0, 1], [2, 1]]));
console.log(solution(2, 5, 0, 1, [[3, 1], [2, 2], [1, 1], [2, 3], [0, 1], [2, 1]]));