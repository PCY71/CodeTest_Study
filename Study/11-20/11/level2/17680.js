/* 17680번 문제
캐시*/

function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;

    let answer = 0;
    let cache = new Array();
    cities.map((city) => city.toLowerCase()).forEach((city) => {
        if (cache.length < cacheSize) {
            let idx = cache.indexOf(city);
            if (idx === -1) {
                cache.push(city);
                answer += 5;
            } else {
                cache = [...cache.slice(0, idx), ...cache.slice(idx + 1), city];
                answer += 1;
            }
        } else {
            let idx = cache.indexOf(city);
            //캐시에 도시가 없는 경우
            if (idx === -1) {
                cache.shift();
                cache.push(city);
                answer += 5;
                //캐시에 도시가 존재하는 경우
            } else {
                cache = [...cache.slice(0, idx), ...cache.slice(idx + 1), city];
                answer += 1;
            }
        }
    })

    return answer;
}
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]));
console.log(solution(2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));
console.log(solution(5, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]));
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"]));
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));