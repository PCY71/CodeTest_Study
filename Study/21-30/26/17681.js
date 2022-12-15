/* 17681번 문제
비밀지도*/

function solution(n, arr1, arr2) {
    const map = new Array();
    arr1.forEach((el) => {
        let row = el.toString(2).replace(/0/gi, ' ').replace(/1/gi, '#').split('')
        while (row.length < n) {
            row.unshift(' ');
        }
        map.push(row);
    })

    arr2.forEach((el, idx) => {
        let row = el.toString(2).replace(/0/gi, ' ').replace(/1/gi, '#').split('')
        while (row.length < n) {
            row.unshift(' ');
        }
        for (let i = 0; i < map[idx].length; i++) {
            if (map[idx][i] === ' ' && row[i] === '#') map[idx][i] = '#'
        }
    })

    return map.map((el) => el.join(''));
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));