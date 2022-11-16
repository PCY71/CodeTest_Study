/* 1845번 문제
폰켓몬*/

function solution(nums) {
    const pocketBall = Math.floor(nums.length / 2);
    const filtered_list = nums.filter((el, i) => nums.indexOf(el) === i).sort((a, b) => a - b);

    return filtered_list.length < pocketBall ? filtered_list.length : pocketBall;
}

const test1 = [3, 1, 2, 3];
const test2 = [3, 3, 3, 2, 2, 4];
const test3 = [3, 3, 3, 2, 2, 2];

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));