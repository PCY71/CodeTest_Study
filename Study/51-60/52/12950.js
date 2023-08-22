/*12950 문제
행렬의 덧셈*/

function solution(arr1, arr2) {
    const answer = [];
    const len = arr1[0].length;
    for (let i = 0; i < arr1.length; i++) {
        const temp = [];
        for (let j = 0; j < len; j++) {
            temp.push(arr1[i][j] + arr2[i][j])
        }
        answer.push(temp)
    }

    return answer;
}
console.log([[1, 2], [2, 3]], [[3, 4], [5, 6]]);
console.log([[1], [2]], [[3], [4]]);