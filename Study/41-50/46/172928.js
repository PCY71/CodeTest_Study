/*172928 문제
공원 산책*/

function solution(park, routes) {
    let curY = curX = 0;
    const lenX = park[0].length;
    const lenY = park.length;
    const coordinates = {
        'E': [0, 1],
        'W': [0, -1],
        'S': [1, 0],
        'N': [-1, 0]
    }

    //이동 가능한 좌표인지 체크
    const checkMove = (dir, num) => {
        let [tempY, tempX] = [curY, curX];
        while (Number(num)) {
            const nextY = tempY + coordinates[dir][0];
            const nextX = tempX + coordinates[dir][1];
            if (nextX < 0 || nextY < 0
                || nextX >= lenX || nextY >= lenY
                || park[nextY][nextX] === 'X') return false;

            tempX = nextX;
            tempY = nextY;
            num--;
        }
        return true;
    }

    //시작 좌표 초기화
    park.forEach((str, idx) => {
        if (str.indexOf('S') >= 0) {
            curY = idx;
            curX = str.indexOf('S');
        }
    })

    //각 루트마다 이동 가능여부 체크 후 이동
    routes.forEach((route) => {
        let [dir, num] = route.split(' ');
        if (checkMove(dir, num)) {
            curY += coordinates[dir][0] * Number(num);
            curX += coordinates[dir][1] * Number(num);
        }
    })


    return [curY, curX];
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]));
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]));