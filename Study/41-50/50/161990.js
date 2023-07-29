/*161990 문제
바탕화면 정리*/

function solution(wallpaper) {
    let [luy, lux, rdy, rdx] = [Infinity, Infinity, 0, 0];
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[0].length; j++) {
            if (wallpaper[i][j] === '#') {
                luy = Math.min(luy, i);
                lux = Math.min(lux, j);
                rdy = Math.max(rdy, i + 1);
                rdx = Math.max(rdx, j + 1);
            }
        }
    }
    return [luy, lux, rdy, rdx];
}

const test1 = [".#...", "..#..", "...#."];
const test2 = ["..........", ".....#....", "......##..", "...##.....", "....#....."];
const test3 = [".##...##.", "#..#.#..#", "#...#...#", ".#.....#.", "..#...#..", "...#.#...", "....#...."];
const test4 = ["..", "#."];

console.log(solution(test1));
console.log(solution(test2));
console.log(solution(test3));
console.log(solution(test4));