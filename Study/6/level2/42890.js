/* 42890번 문제
후보키*/

function solution(relation) {
    let answer = [];
    const column = relation[0].length;
    const row = relation.length;
    //column의 조합을 계산하는 함수
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

    //선택 가능한 조합 계산
    for (let i = 1; i <= column; i++) {
        answer = [...answer, ...getCombinations(0, column, i, [])];
    }

    //유일성 검사
    for (let i = 0; i < answer.length; i++) {
        let set = new Set();
        for (let j = 0; j < row; j++) {
            let data = '';
            for (let col = 0; col < answer[i].length; col++) {
                data = data + relation[j][answer[i][col]] + '/'
            }
            set.add(data);
        }
        if (set.size !== row) {
            answer = [...answer.slice(0, i), ...answer.slice(i + 1)];
            i--;
        }
    }

    //최소성 검사
    for (let i = 0; i < answer.length; i++) {
        answer = answer.filter((el) => el === answer[i] || !answer[i].every((col) => el.includes(col)));
    }

    return answer.length;
}

const relation = [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]];
console.log(solution(relation));