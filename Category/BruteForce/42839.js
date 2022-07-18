/* 42839번 문제
소수 찾기*/
function solution(numbers) {
    let nums = [...numbers];
    let answer = [];

    // 소수 판별
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    }

    // 순열
    const getPermutation = (arr, fixed) => {
        if (arr.length >= 1) {
            for (let i = 0; i < arr.length; i++) {
                const newNum = fixed + arr[i];
                const tempArr = [...arr];
                tempArr.splice(i, 1);
                if (!answer.includes(parseInt(newNum)) && isPrime(parseInt(newNum))) {
                    answer.push(parseInt(newNum))
                }
                getPermutation(tempArr, newNum);
            }
        }
    }

    getPermutation(nums, '');
    return answer.length;
}

const numbers1 = "17";
const numbers2 = "011";

console.log(solution(numbers1));
console.log(solution(numbers2));