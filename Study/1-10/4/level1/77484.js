/* 77484번 문제
로또의 최고 순위와 최저 순위*/

function solution(lottos, win_nums) {
    var answer = [];
    let countEraseNum = lottos.reduce((acc, cur) => cur === 0 ? acc + 1 : acc, 0)
    let rank = 7
    for (const el of lottos) {
        if (win_nums.includes(el)) rank--
    }
    let worst = rank === 7 ? 6 : rank
    let best = rank - countEraseNum === 7 ? 6 : rank - countEraseNum
    answer = [best, worst]

    return answer;
}

const lottos1 = [44, 1, 0, 0, 31, 25];
const lottos2 = [0, 0, 0, 0, 0, 0];
const lottos3 = [45, 4, 35, 20, 3, 9];
const win_nums1 = [31, 10, 45, 1, 6, 19];
const win_nums2 = [38, 19, 20, 40, 15, 25];
const win_nums3 = [20, 9, 3, 45, 4, 35];

console.log(solution(lottos1, win_nums1));
console.log(solution(lottos2, win_nums2));
console.log(solution(lottos3, win_nums3));