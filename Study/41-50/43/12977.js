/*12977번 문제
소수 만들기*/

function solution(nums) {
    let answer = 0;

    getCombinations(0, nums.length, 3, []).forEach(([x, y, z]) => {
        const sum = nums[x] + nums[y] + nums[z];
        if (isPrime(sum)) answer++;
    });

    return answer;
}

const getCombinations = (idx, size, num, result) => {
    // base case1: 선택해야 개수가 남아있는 개수 이상일 경우
    // => 남아있는 모든 걸 선택한다.
    if (size - idx <= num) {
        for (let i = idx; i < size; i++) result.push(i);
        return [result];
    }

    // base case2: 선택이 완료되었을 경우
    if (num === 0) {
        return [result];
    }

    // 현재 idx부터 num개를 뽑는 방법은
    // 1) 현재 요소를 선택하고 num-1개를 뽑는 방법
    const picked = getCombinations(idx + 1, size, num - 1, result.concat(idx));
    // 2) 현재 요소를 선택하지 않고 num개를 뽑는 방법
    const notPicked = getCombinations(idx + 1, size, num, result);
    return picked.concat(notPicked);
};

const isPrime = (num) => {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}
const test1 = [1, 2, 3, 4];
const test2 = [1, 2, 7, 6, 4];

console.log(solution(test1));
console.log(solution(test2));
