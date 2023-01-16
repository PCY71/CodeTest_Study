/*131701번 문제
연속 부분 수열 합의 개수
p.s - 슬라이딩 윈도우 풀이도 찾아보면 좋을듯
*/

function solution(elements) {
    let answer = new Set(elements);

    //부분수열 길이
    for (let len = 2; len <= elements.length; len++) {
        //index
        for (let i = 0; i < elements.length; i++) {
            let sum = 0;
            //덧셈
            for (let j = 0; j < len; j++) {
                sum += elements[(i + j) % elements.length];
            }
            answer.add(sum);
        }
    }

    return answer.size;
}

console.log(solution([7, 9, 1, 1, 4]));
