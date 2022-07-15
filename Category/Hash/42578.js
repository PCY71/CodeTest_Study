function solution(clothes) {
    let obj = new Object();
    let answer = 1;

    //각 종류별 경우의 수 분류
    for (let i = 0; i < clothes.length; i++) {
        obj[clothes[i][1]] = obj[clothes[i][1]] ? obj[clothes[i][1]] + 1 : 1;
    }

    // 각 종류마다 0~n개만큼 입을 수 있으므로 n+1
    // 모든 경우의 수를 곱하고 하나도 입지 않은 경우만 제외한 값이 answer
    for (const part in obj) {
        answer *= obj[part] + 1;
    }
    return answer - 1;
}

const clothes1 = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
const clothes2 = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];

console.log(solution(clothes1));
console.log(solution(clothes2));