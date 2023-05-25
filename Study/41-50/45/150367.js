/*150367 문제
표현가능한 이진트리*/

function solution(numbers) {
    const answer = [];
    numbers.forEach((num) => answer.push(isValid(toBinary(num)) ? 1 : 0));
    return answer;
}

const toBinary = (num) => {
    let length = 1;
    let binNum = num.toString(2);
    for (let i = 1; Math.pow(2, i) - 1 < binNum.length; i++) length = Math.pow(2, i + 1) - 1;
    binNum = '0'.repeat(length - binNum.length) + binNum;
    return binNum;
}

const isValid = (str) => {
    if (str.length == 0) return true

    const rootIdx = Math.floor(str.length / 2);
    const root = str.charAt(rootIdx);

    const left = str.substring(0, rootIdx);
    const right = str.substring(rootIdx + 1);

    if (root !== '1') return isEmpty(left) && isEmpty(right);

    return isValid(left) && isValid(right)
}

const isEmpty = (tree) => {
    let len = tree.length;
    if (len === 0) return true;

    let root = Math.floor(len / 2);
    const left = tree.substring(0, root);
    const right = tree.substring(root + 1);
    if (tree.charAt(root) === '1') return false;

    return isEmpty(left) && isEmpty(right);
}

console.log(solution([7, 42, 5]));
console.log(solution([63, 111, 95]));