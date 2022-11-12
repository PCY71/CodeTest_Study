/* 12952번 문제
N-Queen*/

function solution(n) {
    if (n === 1) return 1;
    const row = new Array(n).fill(0);
    let answer = 0;

    const is_promising = (x) => {
        for (let i = 0; i < x; i++) {
            //열에서의 차이와 행에서의 차이가 같은지(대각선 체크)
            if (row[x] === row[i] || Math.abs(row[x] - row[i]) === x - i) return false;
        }
        return true;
    }

    const dfs = (x) => {
        //퀸을 마지막까지 배치한 경우
        if (x === n) answer++;
        else {
            for (let i = 0; i < n; i++) {
                if (row[x]) continue;
                row[x] = i;
                if (is_promising(x)) dfs(x + 1);
                row[x] = 0;
            }
        }
    }

    dfs(0);

    return answer;
}

console.log(solution(4));