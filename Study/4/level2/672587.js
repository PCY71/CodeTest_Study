/* 67257번 문제
수식 최대화*/

function solution(expression) {
    let max = Number.MIN_SAFE_INTEGER;
    //일단은 6가지 밖에 안되서 각 case 모두 담아놓는데 case 분류 좀 더 생각해보기
    const opArr = [['-', '+', '*'], ['+', '-', '*'], ['+', '*', '-'], ['-', '*', '+'], ['*', '+', '-'], ['*', '-', '+']];

    const calculator = (num1, num2, op) => {
        switch (op) {
            case '+':
                return Number(num1) + Number(num2);
            case '-':
                return Number(num1) - Number(num2);
            default:
                return Number(num1) * Number(num2);
        }
    }

    for (const op of opArr) {
        let str = expression;

        //현재 차례의 연산자 연산 수행
        for (let i = 0; i < op.length; i++) {
            let prevNum = '';
            let curNum = '';
            let activeOperator = '';
            //현재 연산자가 포함된 경우만 계산
            if (str.includes(op[i])) {
                for (let j = 0; j < str.length; j++) {

                    //연산자를 만나면
                    if (op.includes(str.charAt(j))) {
                        if (curNum === '' && str.charAt(j) === '-') {
                            //음수 처리
                            curNum += str.charAt(j);
                            continue;
                        } else if (activeOperator === op[i]) {
                            activeOperator = str.charAt(j);
                            let newNum = calculator(prevNum, curNum, op[i]).toString();
                            str = str.substring(0, j - curNum.length - prevNum.length - 1) + newNum + str.substring(j);
                            j = j - curNum.length - prevNum.length + newNum.length - 1;

                            prevNum = newNum;
                            curNum = '';
                        } else {
                            activeOperator = str.charAt(j);
                            prevNum = curNum;
                            curNum = '';
                        }
                    } else {
                        curNum += str.charAt(j);
                    }
                }
                //마지막으로 연산 수행
                if (activeOperator === op[i]) {
                    str = str.substring(0, str.length - prevNum.length - curNum.length - 1) + calculator(prevNum, curNum, op[i]).toString();
                }
            }

        }

        //계산된 값이 최대값인지 비교
        max = Math.abs(Number(str)) > max ? Math.abs(Number(str)) : max;
    }

    return max;
}

const expression1 = "100-200*300-500+20";
const expression2 = "50*6-3*2";

console.log(solution(expression1));
console.log(solution(expression2));