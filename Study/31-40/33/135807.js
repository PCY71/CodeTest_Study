/*135807번 문제
숫자 카드 나누기*/

function solution(arrayA, arrayB) {
    const startNum = Math.max(Math.min(...arrayA), Math.min(...arrayB));
    for (let num = startNum; num > 0; num--) {
        if (checkArr(num, arrayA, arrayB) || checkArr(num, arrayB, arrayA)) return num;
    }
    return 0;
}


/**
 * 입력한 array가 조건을 만족하는지 체크
 * @param {Number} num       // 나눌 숫자
 * @param {Array} array1    // 체크할 array
 * @param {Array} array2    // 체크할 array
 * @returns             // Boolean
 */
const checkArr = (num, array1, array2) => {
    return array1.every((item) => item % num === 0) && !array2.some((item) => item % num === 0)
}

console.log(solution([10, 17], [5, 20]));
console.log(solution([10, 20], [5, 17]));
console.log(solution([14, 35, 119], [18, 30, 102]));
console.log(solution([20, 40, 10], [5, 17]));