/* 43163번 문제
단어변환*/


function solution(begin, target, words) {
    let answer = -1;
    words.unshift(begin);
    const graph = new Array(words.length).fill('').map((el) => new Set());
    const visit = new Array(words.length).fill(false);
    const queue = [0];

    const makeGraph = () => {
        words.forEach((word, idx) => {
            for (let i = 0; i < word.length; i++) {
                const rule = new RegExp(word.slice(0, i) + '[a-z]' + word.slice(i + 1));
                for (let j = idx + 1; j < words.length; j++) {
                    //이미 포함된 경우는 pass
                    if (graph[idx].has(j)) continue;
                    //한글자만 치환해서 일치하는 경우 연결
                    if (words[j].match(rule)) {
                        graph[idx].add(j);
                        graph[j].add(idx);
                    };
                }
            }
        })
    }
    const BFS = () => {
        while (queue.length > 0) {
            const node = queue.pop();
            visit[node] = true;
            answer++;
            if (words[node] === target) return answer;

            const connected_node = graph[node]

            connected_node.forEach((el) => {
                if (!visit[el]) {
                    queue.push(el);
                }
            })
        }
        return 0
    }

    makeGraph();

    return BFS();
}
const test = [["hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]], ["hit", "cog", ["hot", "dot", "dog", "lot", "log"]]];
console.log(solution(test[0][0], test[0][1], test[0][2]));
console.log(solution(test[1][0], test[1][1], test[1][2]));
