/*134240번 문제
혼자 놀기의 달인*/

function solution(cards) {
    let max = 0;

    const openBox = (card, opened) => {
        let count = 0;
        do {
            opened[card - 1] = true;
            count++
            card = cards[card - 1];
        } while (!opened[card - 1])

        return count;
    }

    for (let i = 0; i < cards.length; i++) {
        const opened = new Array(cards.length).fill(false);
        const group1 = openBox(i + 1, opened);

        for (let j = 0; j < cards.length; j++) {
            if (opened[j]) continue;
            const group2 = openBox(j + 1, opened);
            max = Math.max(max, group1 * group2);
        }
    }

    return max;
}

console.log(solution([8, 6, 3, 7, 2, 5, 1, 4]));