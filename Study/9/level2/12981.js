/* 12981번 문제
영어 끝말잇기*/

function solution(n, words) {
    let word_list = new Array(n).fill('').map((el) => new Array());
    let set = new Set();
    let order = 0;
    let prev = ''

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        //현재 차례의 사람이 실수한 경우
        if (set.has(word) || prev.charAt(prev.length - 1) !== word.charAt(0)) {
            if (i > 0) return [order + 1, word_list[order].length + 1]
        }

        //정상적으로 게임이 진행되는 경우
        set.add(word);
        word_list[order].push(word);
        order = (order + 1) % n;
        prev = word;
    }


    return [0, 0];
}
const words = [[3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]],
[5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]],
[2, ["hello", "one", "even", "never", "now", "world", "draw"]]];

console.log(solution(words[0][0], words[0][1]));
console.log(solution(words[1][0], words[1][1]));
console.log(solution(words[2][0], words[2][1]));