/* 42883번 문제
큰 수 만들기*/

function solution(number, k) {
    let stack = [];
    let count = 0;

    for (let i = 0; i < number.length; i++) {
        //뺄 숫자가 남았고 현재 숫자가 더 크면 stack에서 제거 후 count
        while (count < k && number[i] > stack[stack.length - 1]) {
            stack.pop();
            count++;
        }

        //남길 숫자만큼 스택 채우기
        if (stack.length < number.length - k) {
            stack.push(number[i])
        };
    }

    return stack.join('');
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));