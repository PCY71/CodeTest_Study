/* 12973번 문제
짝지어 제거하기*/

function solution(s) {
    /*효율성 통과 못한 코드
      let str = s;
  
      for(let i = 1; i < str.length; i++){
        let prev = str.charAt(i-1);
        let cur = str.charAt(i);
  
        // 두 문자가 일치하면 삭제 후 다시 처음부터 검사
        if(prev === cur){
          str = str.substring(0,i-1) + str.substring(i+1);
          i = 0;
        }
      }
  
      return str.length === 0 ? 1 : 0;
      */

    let stack = [];

    for (let i = 0; i < s.length; i++) {

        if (stack.length !== 0 && stack[stack.length - 1] === s.charAt(i)) {
            stack.pop();
        } else {
            stack.push(s.charAt(i));
        }
    }

    return stack.length === 0 ? 1 : 0;
}

const s1 = "baabaa";
const s2 = "cdcd";

console.log(solution(s1));
console.log(solution(s2));

