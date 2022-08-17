/* 81303번 문제
표 편집*/

function solution(n, k, cmd) {
    let answer = Array(n).fill('O');
    let cursor = k;
    const history = [];
    let arr = Array(n).fill('').map((el, idx) => [idx - 1, idx + 1])
    arr[n - 1][1] = -1;

    const funcU = (move) => {
        while (move--) {
            cursor = arr[cursor][0];
        }
    }
    const funcD = (move) => {
        while (move--) {
            cursor = arr[cursor][1];
        }

    }
    const funcC = () => {
        const [prev, next] = arr[cursor];
        answer[cursor] = 'X';
        history.push([cursor, prev, next]);

        if (next < 0) {
            if (prev >= 0) arr[prev][1] = next;
            cursor = prev;
        } else {
            arr[next][0] = prev;
            if (prev >= 0) arr[prev][1] = next;
            cursor = next;
        }
    }
    const funcZ = () => {
        const [restore, prev, next] = history.pop();
        answer[restore] = 'O';

        if (prev > 0) arr[prev][1] = restore;
        if (next > 0) arr[next][0] = restore;
    }

    for (const c of cmd) {
        const [command, move] = c.split(' ');
        switch (command) {
            case "U": funcU(move);
                break;
            case "D": funcD(move);
                break;
            case "C": funcC();
                break;
            case "Z": funcZ();
                break;
            default: console.log('Input wrong value')
        }
    }

    return answer.join('');
}

const n = 8;
const k = 2;
const cmd1 = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"];
const cmd2 = ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"];

console.log(solution(n, k, cmd1));
console.log(solution(n, k, cmd2));
