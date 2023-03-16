/*150365번 문제
미로 탈출 명령어*/

function solution(n, m, x, y, r, c, k) {
    //사전순 d, l, r, u
    //배열의 첫 지점 좌표 [1,1]
    let answer = '';
    const countStep = () => Math.abs(r - x) + Math.abs(c - y);
    const move_left = () => {
        answer += 'l';
        y--;
        k--;
        return;
    }
    const move_right = () => {
        answer += 'r';
        y++;
        k--;
        return;
    }
    const move_down = () => {
        answer += 'd';
        x++;
        k--;
        return;
    }
    const move_up = () => {
        answer += 'u';
        x--;
        k--;
        return;
    }
    const move_to_far = () => {
        //아래로 갈 수 있으면 일단 아래로
        if (x < n) {
            move_down();
            return;
        }
        //바닥에 도착 후 왼쪽으로 갈 수 있으면 왼쪽으로
        if (y > 1) {
            move_left();
            return;
        }

        //이미 좌하단에 도착했으므로 rl로 step 소모
        move_right();
        move_left();
        return;
    }
    const move_to_goal = () => {
        //d, l, r, u 순으로 움직임 가능한지 체크
        if (x < r) {
            move_down();
            return
        }
        if (y > c) {
            move_left();
            return
        }
        if (y < c) {
            move_right();
            return
        } if (x > r) {
            move_up();
            return
        } else {
            console.log('error_case');
            return;
        }

    }

    while (k > 0) {
        if (countStep() < k) {
            //step 여분이 남은 경우
            move_to_far()
        } else {
            //도착지점으로 출발하는 움직임
            move_to_goal()

        }
    }

    return x === r && y === c ? answer : 'impossible';
}

console.log(solution(3, 4, 2, 3, 3, 1, 5));
console.log(solution(2, 2, 1, 1, 2, 2, 2));
console.log(solution(3, 3, 1, 2, 3, 3, 4));