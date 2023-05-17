/*178871 문제
달리기 경주*/

function solution(players, callings) {
    const map = players.reduce((prev_map, name) => {
        prev_map.set(name, prev_map.size);
        return prev_map;
    }, new Map);

    callings.forEach((name) => {
        const idx = map.get(name);
        map.set(players[idx - 1], idx);
        map.set(players[idx], idx - 1);
        [players[idx], players[idx - 1]] = [players[idx - 1], players[idx]];
    })

    return players;
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]));