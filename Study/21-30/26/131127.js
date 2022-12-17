/* 131127번 문제
할인 행사*/

function solution(want, number, discount) {
    let count = 0;
    const isValid = (list) => {
        for (let i = 0; i < want.length; i++) {
            const count = list.filter(el => el === want[i]).length;
            if (number[i] !== count) return false;
        }
        return true;
    }

    for (let day = 1; day - 11 <= discount.length; day++) {
        const discList = discount.slice(day - 1, day + 9);
        if (isValid(discList)) count++;
    }

    return count;
}

console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]));
console.log(solution(["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]));