/*127679 문제
프렌즈4블록*/

function solution(m, n, board) {
    let answer = 0;
    const block = board.reverse().map((el) => el.split(''));

    const match = () => {
        const set = new Set();

        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const cur_char = block[i][j];
                if (cur_char === ' ') continue;

                if (block[i][j + 1] === cur_char) {
                    if (block[i + 1][j] === cur_char) {
                        if (block[i + 1][j + 1] === cur_char) {
                            set.add(`${j},${i}`);
                            set.add(`${j + 1},${i}`);
                            set.add(`${j},${i + 1}`);
                            set.add(`${j + 1},${i + 1}`);
                        }
                    }
                }
            }
        }
        return set;
    }

    const remove = (set) => {
        set.forEach((el) => {
            const [x, y] = el.split(',').map((el) => Number(el));
            block[y][x] = ' ';
        })
    }

    const sortArr = () => {
        for (let i = 0; i < n; i++) {
            const queue = [];
            let count = 0;

            for (let j = 0; j < m; j++) {
                if (block[j][i] !== ' ') {
                    queue.push(block[j][i]);
                }
                block[j][i] = ' ';
            }
            while (queue.length > 0) {
                block[count][i] = queue.shift();
                count++;
            }
        }
    }

    while (match().size > 0) {
        answer += match().size;
        remove(match());
        sortArr();
    }

    return answer;
}


console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));