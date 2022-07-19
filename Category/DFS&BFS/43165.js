/* 43165번 문제
타겟 넘버*/

function solution(numbers, target) {
    let answer = 0;
    const getCase = (arr, fixed) => {
        if (arr.length >= 1) {
            const posNum = arr[0]
            const negNum = -arr[0]
            const nextArr = arr.slice(1);

            //남은 arr의 수들도 재귀를 통해 계산  
            getCase(nextArr, [...fixed, posNum]);
            if (negNum) {
                //0이 아닌 경우는 음수값도 재귀
                getCase(nextArr, [...fixed, negNum]);
            }
        } else {
            /*깊이의 마지막까지 도달한 경우 
            fixed 값의 합이 target인지 체크*/
            if (fixed.reduce((acc, cur) => acc + cur, 0) === target) {
                answer++;
            }
        }
    }

    getCase(numbers, []);

    return answer;
}

const numbers1 = [1, 1, 1, 1, 1];
const numbers2 = [4, 1, 2, 1];
const target1 = 3;
const target2 = 4;

console.log(solution(numbers1, target1));
console.log(solution(numbers2, target2));

