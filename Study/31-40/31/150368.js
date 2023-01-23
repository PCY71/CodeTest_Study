/*150368번 문제
이모티콘 할인행사*/

function solution(users, emoticons) {
    let answer = [0, 0];
    const discount = [0.1, 0.2, 0.3, 0.4];
    const discountCase = []; //

    //모든 할인율의 경우의 수를 계산
    const combi = (items) => {
        if (items.length === emoticons.length) {
            discountCase.push(items);
            return;
        }
        for (let i = 0; i < discount.length; i++) {
            combi([...items, discount[i]]);
        }
    }
    combi([]);

    //각 사람마다 현재 할인율을 대입하여 계산
    discountCase.forEach((curDiscount) => {
        const result = [0, 0];
        for (let i = 0; i < users.length; i++) {
            let sum = 0; //이 사람이 현재 적용된 할인율로 구매하는 비용합
            const [buy, wallet] = users[i];  //buy - 구매비율, wallet - 서비스 가입 기준치

            curDiscount.forEach((ratio, idx) => {
                const price = emoticons[idx] * (1 - ratio);
                if (ratio * 100 >= buy) sum += price;
            })
            sum >= wallet ? result[0]++ : result[1] += sum;
        }
        // answer의 값을 갱신
        if (result[0] > answer[0] || (result[0] === answer[0]) && result[1] > answer[1]) answer = result;

    })


    return answer;
}
console.log(solution([[40, 10000], [25, 10000]], [7000, 9000]));
console.log(solution([[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]], [1300, 1500, 1600, 4900]));