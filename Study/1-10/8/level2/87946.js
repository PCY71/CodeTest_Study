/* 87946번 문제
피로도*/

function solution(k, dungeons) {
    const getPermutations = (arr, selectNum) => {
        let results = [];
        if (selectNum === 1) return arr.map((v) => [v]);

        arr.forEach((v, idx, arr) => {
            const fixer = v;
            const rest = arr.filter((_, index) => index !== idx);
            const permutationArr = getPermutations(rest, selectNum - 1);
            const combineFixer = permutationArr.map((v) => [fixer, ...v]);
            results.push(...combineFixer);
        });

        return results;
    }
    let permutation = []
    for (let i = dungeons.length + 1; i > 0; i--) {
        permutation = [...permutation, ...getPermutations(dungeons, i)]
    }

    for (let i = 0; i < permutation.length; i++) {
        const orders = permutation[i];
        let length = orders.length;
        let fatigue = k;
        while (orders.length > 0) {
            const [require, consume] = orders[orders.length - 1];
            if (fatigue >= require) {
                orders.pop();
                fatigue -= consume;
            } else {
                break;
            }
        }
        if (orders.length === 0) return length;
    }
    return -1;
}

console.log(solution(80, [[80, 20], [50, 40], [30, 10]]));