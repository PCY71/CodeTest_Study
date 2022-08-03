/* 42583번 문제
다리를 지나가는 트럭*/

function solution(bridge_length, weight, truck_weights) {
    let remainWeight = weight;
    let bridge = [];
    let time = 0;

    const pushTruck = (truck) => {
        //현재 다리에 건너고 있는 트럭 추가
        bridge.push(truck);
        //남은 여유 중량
        remainWeight = remainWeight - truck[0];
    }

    const passTruck = () => {
        //올라가면 무게가 초과되는 경우 트럭을 보내고 올라가기
        const [prevWeight, prevTime] = bridge.shift();
        //무게 갱신
        remainWeight = remainWeight + prevWeight;
        //시간 갱신
        time = time + prevTime;
        if (bridge.length > 0) bridge = bridge.map((el) => [el[0], el[1] - prevTime]);
    }

    while (truck_weights.length > 0) {
        let curTruck = truck_weights.shift();
        //현재 다리에 추가로 트럭이 올라갈 수 있는경우
        if (remainWeight >= curTruck) {
            //트럭이 다리에 오르는 시간
            time++;
            if (bridge.length > 0) bridge = bridge.map((el) => [el[0], el[1] - 1])
                .filter((el) => {
                    if (el[1] === 0) remainWeight += el[0];
                    return el[1] > 0
                });

            pushTruck([curTruck, bridge_length]);
        } else {
            do {
                passTruck();
            } while (remainWeight < curTruck);
            pushTruck([curTruck, bridge_length]);

        }
    }
    time = time + bridge.pop()[1];
    return time;
}

const test1 = [2, 10, [7, 4, 5, 6]];
const test2 = [100, 100, [10]];
const test3 = [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]];

console.log(solution(test1[0], test1[1], test1[2]));
console.log(solution(test2[0], test2[1], test2[2]));
console.log(solution(test3[0], test3[1], test3[2]));

