/* 60058번 문제
괄호 변환*/

function solution(p) {

    //step. 1
    if (!p) return '';

    //step. 2
    let u, v;
    let isBalanced = true;
    let count = 0;
    for (let i = 0; i < p.length; i++) {
        count = p.charAt(i) === '(' ? count + 1 : count - 1;
        if (count < 0) isBalanced = false;
        if (count === 0) {
            u = p.substring(0, i + 1);
            v = p.substring(i + 1);

            //step. 3
            if (isBalanced) {
                return u + solution(v);
                //step. 4
            } else {
                let result = `(${solution(v)})`;
                u = [...u.substring(1, u.length - 1)].map((el) => el === '(' ? ')' : '(').join('')
                return result + u;
            }
        }
    }
}


const p1 = "(()())()";
const p2 = ")(";
const p3 = "()))((()";

console.log(solution(p1));
console.log(solution(p2));
console.log(solution(p3));