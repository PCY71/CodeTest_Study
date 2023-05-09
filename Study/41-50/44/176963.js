/*176963번 문제
추억 점수*/

function solution(name, yearning, photo) {
    const answer = [];
    const map = new Map();
    name.forEach((n, idx) => map.set(n, yearning[idx]));

    photo.forEach((names) => {
        let score = 0;
        names.forEach((n) => score += map.get(n) ? map.get(n) : 0);
        answer.push(score);
    })

    return answer;
}

console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]));
console.log(solution(["kali", "mari", "don"], [11, 1, 55], [["kali", "mari", "don"], ["pony", "tom", "teddy"], ["con", "mona", "don"]]));
console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may"], ["kein", "deny", "may"], ["kon", "coni"]]));