/* 42579번 문제
베스트앨범*/

function solution(genres, plays) {
    let answer = [];
    let obj = {};

    //장르별로 분류
    for (let i = 0; i < genres.length; i++) {
        if (!obj[genres[i]]) obj[genres[i]] = [[plays[i], i]];
        else obj[genres[i]].push([plays[i], i]);
    }
    //정르별로 모아서 answer에 push
    for (const genre in obj) {
        answer.push(obj[genre].sort((a, b) => b[0] - a[0]));
    }

    //많이 들은 장르를 앞으로 정렬
    return answer.sort((a, b) => b.reduce((acc, cur) => acc + cur[0], 0) - a.reduce((acc, cur) => acc + cur[0], 0))
        //각 장르별 2곡씩만 남기기
        .map((genre) => genre.filter((song, idx) => idx < 2))
        //각 번호를 return
        .reduce((acc, cur) => [...acc, ...cur], [])
        .map(([num, idx]) => idx);;

}

const test = [["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]];
console.log(solution(test[0], test[1]));