/*160586 문제
대충 만든 자판*/

function solution(keymap, targets) {
    const answer = [];
    const min_map = new Map();

    keymap.forEach((keys) => {
        for (let i = 0; i < keys.length; i++) {
            const char = keys[i];
            if (min_map.has(char)) {
                min_map.set(char, Math.min(min_map.get(char), i + 1))
            } else {
                min_map.set(char, i + 1);
            }
        }
    })

    targets.forEach((target) => {
        let count = 0;
        for (let i = 0; i < target.length; i++) {
            const char = target[i];
            if (!min_map.has(char)) {
                answer.push(-1);
                return;
            }
            count += min_map.get(char);
        }
        answer.push(count);
    })

    return answer;
}


console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"]));
console.log(solution(["AA"], ["B"]));
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"]));