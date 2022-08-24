/* 42885번 문제
구명보트*/

function solution(people, limit) {
    let answer = 0;

    people.sort((a, b) => b - a);

    for (let i = 0, j = people.length - 1; i <= j; i++) {
        if (people[i] + people[j] <= limit) j--;
        answer++;
    }

    return answer;
}

const people = [[[70, 50, 80, 50], 100], [[70, 80, 50], 100]];
console.log(solution(people[0][0], people[0][1]));
console.log(solution(people[1][0], people[1][1]));