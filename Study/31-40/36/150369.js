/*150369번 문제
택배 배달과 수거하기*/

function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    deliveries = [0, ...deliveries];
    pickups = [0, ...pickups];

    //가장 먼 배송지와 수거지 초기화
    let far_del = n;
    let far_pick = n;

    const set_dist = () => {
        while (deliveries[far_del] === 0 && far_del > 0) far_del--;
        while (pickups[far_pick] === 0 && far_pick > 0) far_pick--;
    }
    set_dist();

    //배송시 수행되는 작업들
    const work = () => {
        let del_cap = cap;
        let pick_cap = cap;

        //최대 거리까지 이동
        const max = Math.max(far_del, far_pick);
        answer += 2 * max;

        //배송
        for (let i = far_del; i >= 0; i--) {
            if (deliveries[i]) {
                if (deliveries[i] >= del_cap) {
                    deliveries[i] -= del_cap;
                    break;
                } else {
                    del_cap -= deliveries[i];
                    deliveries[i] = 0;
                }
            }
        }

        //수거
        for (let i = far_pick; i >= 0; i--) {
            if (pickups[i]) {
                if (pickups[i] >= pick_cap) {
                    pickups[i] -= pick_cap;
                    break;
                } else {
                    pick_cap -= pickups[i];
                    pickups[i] = 0;
                }
            }
        }
    }

    //배달할 것이나 수거할 것이 남은 동안 작업
    while (far_del || far_pick) {
        work();
        set_dist();
    }

    return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0]));
console.log(solution(2, 2, [0, 0], [0, 4]));

