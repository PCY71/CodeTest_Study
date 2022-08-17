/* 12985번 문제
예상 대진표*/


function solution(n, a, b) {
    let round = 20;

    //총 round 체크
    for (let i = 1; i < 20; i++) {
        if (Math.pow(2, i) === n) {
            round = i;
            break;
        }
    }

    //다음 라운드 진출시 번호가 일치하는지 여부 확인
    for (let j = 0; j <= round; j++) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        if (a === b) return j + 1;
    }
}