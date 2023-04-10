/*159994번 문제
카드 뭉치*/

function solution(cards1, cards2, goal) {
    let answer = '';
    const DFS = (card1, card2, rest) => {
        if (rest.length === 0) return 'Yes';
        const next = rest[0];
        if (card1[0] !== next && card2[0] !== next) return 'No';

        if (card1[0] === next) return DFS(card1.slice(1), card2, rest.slice(1));
        if (card2[0] === next) return DFS(card1, card2.slice(1), rest.slice(1));
    }

    return DFS(cards1, cards2, goal);
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]));
