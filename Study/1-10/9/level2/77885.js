/* 77885번 문제
2개 이하로 다른 비트*/

function solution(numbers) {
    let answer = [];
    const bitCalculator = (number) => {
        if (number % 2 === 0) return number + 1;
        let binaryNum = '0'.concat(number.toString(2)).split('').reverse().join('');
        for (let i = 0; i < binaryNum.length; i++) {
            if (binaryNum.charAt(i) === '0') return number + Math.pow(2, i - 1);
        }
        return 0;
    };

    numbers.forEach((num) => answer.push(bitCalculator(num)));

    return answer;
}

console.log(solution([2, 7]));