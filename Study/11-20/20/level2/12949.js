/* 12949번 문제
행렬의 곱셈*/

function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let temp = [];
        for (let j = 0; j < arr2[0].length; j++) {
            let el = 0;
            for (let k = 0; k < arr2.length; k++) {
                el += arr1[i][k] * arr2[k][j];
            }
            temp.push(el);
        }
        answer.push(temp);
    }
    return answer;
}

console.log(solution([[1, 4], [3, 2], [4, 1]], [[3, 3], [3, 3]]));
console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]));