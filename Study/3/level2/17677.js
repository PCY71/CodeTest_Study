/* 17677번 문제
뉴스 클러스터링*/

function solution(str1, str2) {

    if (str1.length === 0 && str2.length === 0) return 65536;

    let eng = /[^a-z]/gi;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    let coefficient = 65536;

    //조합 계산 함수
    const calculSet = (str) => {
        let result = {}
        for (let i = 0; i < str.length - 1; i++) {
            let subStr = str.substring(i, i + 2).replace(eng, '');
            if (subStr.length === 2) {
                if (result[subStr]) {
                    result[subStr]++;
                } else {
                    result[subStr] = 1;
                }
            }
        }
        return result;
    }
    let set1 = calculSet(str1);
    let set2 = calculSet(str2);

    let intersection = [];
    let union = [];

    for (const key in set1) {
        if (set2[key]) {
            //교집합이 존재하는 경우
            let min = Math.min(set1[key], set2[key]);
            let max = Math.max(set1[key], set2[key]);
            for (let i = 0; i < min; i++) {
                intersection.push(key);
                union.push(key);
            }
            for (let j = 0; j < max - min; j++) {
                union.push(key);
            }
        } else {
            //set1에만 존재하는 경우
            for (let i = 0; i < set1[key]; i++) {
                union.push(key);
            }
        }
    }

    //set2에만 존재하는 경우
    for (const key in set2) {
        if (!set1[key]) {
            for (let i = 0; i < set2[key]; i++) {
                union.push(key);
            }
        }
    }
    if (union.length === 0 && intersection.length === 0) return coefficient;

    return Math.floor((intersection.length / union.length) * coefficient);
}

const str1_1 = "FRANCE";
const str1_2 = "handshake";
const str1_3 = "aa1+aa2	";
const str1_4 = "E=M*C^2	";

const str2_1 = "french";
const str2_2 = "shake hands";
const str2_3 = "AAAA12";
const str2_4 = "e=m*c^2	";

console.log(solution(str1_1, str2_1));
console.log(solution(str1_2, str2_2));
console.log(solution(str1_3, str2_3));
console.log(solution(str1_4, str2_4));