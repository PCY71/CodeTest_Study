/* 42628번 문제
이중우선순위큐*/

function solution(operations) {
    //삽입정렬 사용
    const sortedArr = [];

    const insert = (num) => {
        sortedArr.push(num);
        for (let i = sortedArr.length - 1; i > 0; i--) {
            if (sortedArr[i] < sortedArr[i - 1]) [sortedArr[i], sortedArr[i - 1]] = [sortedArr[i - 1], sortedArr[i]]
            else break;
        }
    }
    const delMax = () => {
        if (sortedArr.length > 0) {
            sortedArr.pop();
        }
    }
    const delMin = () => {
        if (sortedArr.length > 0) {
            sortedArr.shift();
        }
    }

    for (const operation of operations) {
        const [command, num] = operation.split(' ')
        switch (command) {
            case "I": insert(Number(num));
                break;
            case "D":
                if (Number(num) === 1) delMax();
                else delMin();
                break;
            default:
                console.log('Input wrong command')
        }
    }

    return sortedArr.length === 0 ? [0, 0] : [sortedArr[sortedArr.length - 1], sortedArr[0]]
}

const operations1 = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"];
const operations2 = ["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"];

console.log(solution(operations1));
console.log(solution(operations2));