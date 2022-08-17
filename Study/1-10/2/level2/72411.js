/* 72411번 문제
메뉴 리뉴얼*/

function solution(orders, course) {
    let answer = []
    let menus = {};
    let max = [];

    //경우의 수 계산  
    const getCombinations = (arr, num) => {
        const results = [];
        if (num === 1) return arr.map((val) => [val]);

        arr.forEach((fixed, idx, origin) => {
            const rest = origin.slice(idx + 1);
            const combinations = getCombinations(rest, num - 1);
            const attached = combinations.map((combinations) => [fixed, ...combinations]);
            results.push(...attached);
        })

        return results;
    }

    for (const order of orders) {
        for (const num of course) {
            const combi = getCombinations([...order].sort(), num).map((el) => el.join(''));
            for (const el of combi) {
                //menu 주문수 count
                if (menus[el]) {
                    menus[el]++
                    max[num] = menus[el] > max[num] ? menus[el] : max[num];
                } else {
                    menus[el] = 1;
                    if (max[num]) {
                        max[num] = menus[el] > max[num] ? menus[el] : max[num];
                    } else {
                        max[num] = 1;
                    }
                }
            }
        }
    }

    //2번 이상 주문된 메뉴 중 최대 주문메뉴만 추출
    for (const menu in menus) {
        if (menus[menu] > 1 && menus[menu] >= max[menu.length]) {
            answer.push(menu)
        }
    }

    return answer.sort();
}

const orders1 = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const orders2 = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
const orders3 = ["XYZ", "XWY", "WXA"];

const course1 = [2, 3, 4];
const course2 = [2, 3, 5];
const course3 = [2, 3, 4];

console.log(solution(orders1, course1));
console.log(solution(orders2, course2));
console.log(solution(orders3, course3));


