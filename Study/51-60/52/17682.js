/*17682 문제
다트 게임*/

function solution(dartResult) {
    /**
     * 3번의 기회(각 0~10점)
     * S,D,T : 각각 1,2,3제곱
     * * : 스타상으로 이전 점수를 2배(첫 당첨시 해당 점수 2배)
     * # : 아차상으로 마이너스
     */
    let idx = -1;
    const score = new Array(3);
    const numReg = /[0-9]/;

    [...dartResult].forEach((char, i) => {
        if (idx > 0 && char === '0' && dartResult[i - 1] === '1') return;

        if (numReg.test(char)) {
            idx++;
            //숫자
            //2자리 숫자
            if (char === '1' && dartResult[i + 1] === '0') {
                score[idx] = 10;
            } else {
                //1자리 숫자
                score[idx] = Number(char);
            }
        } else {
            //연산자
            switch (char) {
                case 'S':
                    score[idx] = score[idx];
                    break;
                case 'D':
                    score[idx] = Math.pow(score[idx], 2);
                    break;
                case 'T':
                    score[idx] = Math.pow(score[idx], 3);
                    break;
                case '*':
                    score[idx] = 2 * score[idx];
                    if (idx !== 0) score[idx - 1] = 2 * score[idx - 1];
                    break;
                case '#':
                    score[idx] = -1 * score[idx];
                    break;
                default:
                    console.log('You input invalid command')
                    break;

            }
        }
    })

    return score.reduce((acc, cur) => acc + cur, 0);
}

const test1 = "1S2D*3T";
const test2 = "1D2S#10S";
const test3 = "1D2S0T";
const test4 = "1S*2T*3S";
const test5 = "1D#2S*3S";
const test6 = "1T2D3D#";
const test7 = "1D2S3T*";

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
console.log(solution(test4));
console.log(solution(test5));
console.log(solution(test6));
console.log(solution(test7));