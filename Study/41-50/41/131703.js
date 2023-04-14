/*131703번 문제
2차원 동전 뒤집기*/

function solution(beginning, target) {
    let answer = [0, 0];
    const arr1 = beginning.map(v => [...v]);
    const arr2 = beginning.map(v => [...v]);
    const flip_row = (arr, rowNum) => {
        for (let i = 0; i < arr[0].length; i++) {
            arr[rowNum][i] = arr[rowNum][i] === 0 ? 1 : 0;
        }
    }
    const flip_col = (arr, colNum) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i][colNum] = arr[i][colNum] === 0 ? 1 : 0;
        }
    }

    //flip row
    for (let i = 0; i < beginning.length; i++) {
        if (arr1[i][0] !== target[i][0]) {
            flip_row(arr1, i);
            answer[0]++;
        }
        if (arr2[i][0] === target[i][0]) {
            flip_row(arr2, i);
            answer[1]++;
        }
    }

    //flip col
    for (let i = 0; i < beginning[0].length; i++) {
        if (arr1[0][i] !== target[0][i]) {
            flip_col(arr1, i);
            answer[0]++;
        }
        if (arr2[0][i] !== target[0][i]) {
            flip_col(arr2, i);
            answer[1]++;
        }
    }
    return equals(arr1, target) ? Math.min(answer[0], answer[1]) : -1;
}

const equals = (arr1, arr2) => {
    if (!Array.isArray(arr1) && !Array.isArray(arr2)) return arr1 === arr2;
    if (arr1.length !== arr2.length) return false;

    for (let i = 0, length = arr1.length; i < length; i++) {
        if (!equals(arr1[i], arr2[i])) return false;
    }

    return true;
}
console.log(solution([[0, 1, 0, 0, 0], [1, 0, 1, 0, 1], [0, 1, 1, 1, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]], [[0, 0, 0, 1, 1], [0, 0, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]));
console.log(solution([[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[1, 0, 1], [0, 0, 0], [0, 0, 0]]));
