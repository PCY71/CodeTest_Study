/* 84512번 문제
모음사전*/

function solution(word) {
    var answer = 0;
    const alphabet = ['A', 'E', 'I', 'O', 'U'];
    const dictionary = [];

    const makeDic = (prev) => {
        for (const vowel of alphabet) {
            let cur = ''
            if (prev.length < 5) {
                cur = prev + vowel;
            } else {

            }
            dictionary.push(cur);
            makeDic(prev);
        }

    }

    makeDic('');

    return answer;
}