/*132265번 문제
롤케이크 자르기*/

function solution(topping) {
    if (topping.length < 2) return 0;

    const left = {};
    const right = {};
    let answer = 0;

    // 좌우 초기화
    for (let i = 0; i < topping.length; i++) {
        const curTopping = topping[i];
        right[curTopping] ? right[curTopping]++ : right[curTopping] = 1;
    }
    let leftSize = 0;                           //왼쪽 토핑의 사이즈
    let rightSize = Object.keys(right).length;  //오른쪽 토핑의 사이즈


    for (let j = 0; j < topping.length - 1; j++) {
        if (leftSize > rightSize) break;
        const num = topping[j];
        //우측에서 현재 num 1감소
        right[num]--;
        if (!right[num]) rightSize--;
        //좌측에 현재 num 1추가
        if (!left[num]) {
            left[num] = 1;
            leftSize++;
        } else {
            left[num]++;
        }

        leftSize == rightSize && answer++
    }

    return answer;
}

const test1 = [1, 2, 1, 3, 1, 4, 1, 2];
const test2 = [1, 2, 3, 1, 4];

console.log(solution(test1));
console.log(solution(test2));