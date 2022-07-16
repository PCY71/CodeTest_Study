/* 42587번 문제
프린터*/

function solution(priorities, location) {
    let printCount = 0;
    let queue = priorities.map((el, i) => [el, i]);
    let curDoc;

    //출력
    while (queue.length > 0) {
        // Step1. 대기목록에서 꺼내기
        curDoc = queue.shift();
        let length = queue.length;

        // Step2. 중요도가 높은 문서가 존재하면 대기목록의 뒤로 밀기
        for (let j = 0; j < length; j++) {
            if (queue[j][0] > curDoc[0]) {
                queue.push(curDoc);
                break;
            }
        }
        // Step3. 그렇지 않으면 문서를 인쇄
        if (length === queue.length) {
            printCount++
            //현재 출력하는 문서가 요청값이면 return
            if (location === curDoc[1]) {
                return printCount;
            }
        }

    }

    return -1;
}

const priorities1 = [2, 1, 3, 2];
const priorities2 = [1, 1, 9, 1, 1, 1];

const location1 = 2;
const location2 = 0;

console.log(solution(priorities1, location1));
console.log(solution(priorities2, location2));