/* 42862번 문제
체육복*/

function solution(n, lost, reserve) {
    let answer = n - lost.length;
    let noReserveLost = []

    //잃어버렸지만 여분이 있는 사람 제외
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i])) {
            answer++;
            reserve = reserve.filter((el) => el !== lost[i]);
            continue;
        } else {
            noReserveLost.push(lost[i]);
        }
    }

    noReserveLost.sort((a, b) => a - b);

    // 앞 뒤 사람이 여분 있는 경우 빌리기
    if (reserve.length > 0) {
        noReserveLost.forEach((el) => {
            if (reserve.includes(el - 1)) {
                reserve = reserve.filter((reserve) => reserve !== el - 1);
                answer++;
            }
            else if (reserve.includes(el + 1)) {
                reserve = reserve.filter((reserve) => reserve !== el + 1);
                answer++;
            }
        })
    }

    return answer;
}

const n1 = 5;
const n2 = 5;
const n3 = 3;
const lost1 = [2, 4];
const lost2 = [2, 4];
const lost3 = [3];
const reserve1 = [1, 3, 5];
const reserve2 = [3];
const reserve3 = [1];

console.log(solution(n1, lost1, reserve1));
console.log(solution(n2, lost2, reserve2));
console.log(solution(n3, lost3, reserve3));


