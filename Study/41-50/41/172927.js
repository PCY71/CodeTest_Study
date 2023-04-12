/*172927번 문제
광물 캐기*/

function solution(picks, minerals) {
    const arr = []; // 다25, 철5, 돌1점으로 계산
    const length = minerals.length;
    let answer = 0;

    const deploy = (minerals) => {
        //pick 1 - 다이아 곡괭이 | 2 - 쇠 곡괭이 | 3 - 돌 곡괭이
        let pick = 0;
        if (picks[0] > 0) {
            picks[0]--;
            pick = 1;
        } else if (picks[1] > 0) {
            picks[1]--;
            pick = 2;
        } else {
            picks[2]--;
            pick = 3;
        }

        minerals.forEach((mineral) => {
            switch (mineral) {
                case 'diamond':
                    if (pick === 1) answer++;
                    else if (pick === 2) answer += 5;
                    else answer += 25;
                    break;
                case 'iron':
                    if (pick === 3) answer += 5;
                    else answer++;
                    break;
                default:
                    answer++;
                    break;
            }
        })
    }
    minerals = minerals.filter((el, idx) => idx < (picks.reduce((acc, cur) => acc + cur, 0)) * 5)

    for (let i = 0; i <= Math.floor(length / 5); i++) {
        let fatigue = 0;
        for (let j = 0; j < 5 && (i * 5) + j < length; j++) {
            switch (minerals[i * 5 + j]) {
                case 'diamond': fatigue += 25;
                    break;
                case 'iron': fatigue += 5;
                    break;
                default: fatigue++;
            }
        }
        arr[i] = [fatigue, minerals.slice(5 * i, 5 * i + 5)];
    }
    arr.sort((a, b) => b[0] - a[0]);

    arr.forEach(([_, el]) => {
        deploy(el);
    })

    return answer;
}

console.log(solution([1, 3, 2], ["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"]));
console.log(solution([0, 1, 1], ["diamond", "diamond", "diamond", "diamond", "diamond", "iron", "iron", "iron", "iron", "iron", "diamond"]));
