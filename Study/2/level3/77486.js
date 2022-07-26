/* 72496번 문제
다단계 칫솔 판매*/

function solution(enroll, referral, seller, amount) {
    /* 각멤버마다 이런 형태로 저장
    member = {
        john : {
            ref: '-',
            benefit: 0
        }    
    }*/
    let member = {}
    var answer = [];

    //이익금을 분배하는 함수
    const distribute = (money, seller, ref) => {
        let refAmount = Math.floor(money / 10);
        let sellerAmount = money - refAmount;

        member[seller].benefit += sellerAmount;
        if (member[ref].ref !== "-" && refAmount > 1) {
            distribute(refAmount, ref, member[ref].ref);
        } else {
            member[ref].benefit += refAmount - Math.floor(refAmount / 10);
        }
    }

    //조직의 부모 관계를 정리
    for (let i = 0; i < referral.length; i++) {
        member[enroll[i]] = {
            ref: referral[i],
            benefit: 0
        };
    }

    //루프를 돌며 이익금 분배
    for (let i = 0; i < seller.length; i++) {
        const money = amount[i] * 100;
        if (member[seller[i]].ref !== "-") {
            distribute(money, seller[i], member[seller[i]].ref);
        } else {
            member[seller[i]].benefit += money - Math.floor(money / 10);
        }
    }

    //answer array에 담기
    for (const enr of enroll) {
        answer.push(member[enr].benefit)
    }

    return answer;
}

const enroll1 = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"];
const enroll2 = ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"];
const referral1 = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"];
const referral2 = ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"];
const seller1 = ["young", "john", "tod", "emily", "mary"];
const seller2 = ["sam", "emily", "jaimie", "edward"];
const amount1 = [12, 4, 2, 5, 10];
const amount2 = [2, 3, 5, 4];

console.log(solution(enroll1, referral1, seller1, amount1));
console.log(solution(enroll2, referral2, seller2, amount2));