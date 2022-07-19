/* 42860번 문제
조이스틱*/

function solution(name) {
    let nameToAsc = [...name].map((el) => (el.charCodeAt(0) - 65) % 26)
    let minChar = []

    nameToAsc.forEach((el) => {
        minChar.push(Math.min(el, Math.abs(el - 26)))
    })

    const eachCost = minChar.reduce((acc, cur) => acc + cur, 0); //각 글자의 상하조작 비용
    let move = name.length - 1;

    for (let i = 0; i < name.length; i++) {
        // 다음 값을 가리키는 index  
        let index = i + 1;

        // 연속되는 A의 갯수를 확인
        while (index < name.length && name.charCodeAt(index) === 65) {
            index++;
        }

        //순서대로 가는것, 뒤로 돌아가는것, 뒷부분을 입력하고 돌아오는 것 중 최소값
        move = Math.min(move,
            i * 2 + name.length - index,
            (name.length - index) * 2 + i);
    }
    return eachCost + move;
}

const name1 = "JEROEN";
const name2 = "JAN";

console.log(solution(name1));
console.log(solution(name2));