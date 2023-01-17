/*150370번 문제
개인정보 수집 유효기간*/

function solution(today, terms, privacies) {
    const answer = [];
    today = dateToNum(today)
    terms = new Map(terms.map((el) => el.split(' ')));

    for (let i = 1; i <= privacies.length; i++) {
        const [date, type] = privacies[i - 1].split(' ');
        const expireTime = calExpireDate(dateToNum(date), terms.get(type));
        if (today >= expireTime) answer.push(i);
    }

    return answer
}

/**
 * 날짜 정보가 기입된 String을 
 * 하루가 1인 기준의 number로 치환
 * @param {String} date //ex) '2022.01.01'
 * @returns 
 */
const dateToNum = (date) => {
    const [year, month, day] = date.split('.')
    return Number(day) + Number(month) * 28 + Number(year) * 28 * 12
}
/**
 * 한달 28일 기준 만료일 계산
 * @param {Number} num 
 * @param {*} month 
 * @returns 
 */
const calExpireDate = (num, month) => num + Number(month) * 28

console.log(solution("2022.05.19", ["A 6", "B 12", "C 3"], ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]));
console.log(solution("2020.01.01", ["Z 3", "D 5"], ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]));