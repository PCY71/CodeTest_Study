/*42892 문제
길 찾기 게임*/

function solution(nodeinfo) {
    const preArr = [];
    const postArr = [];

    // [x,y,idx]형태
    // level이 높은 순으로 1차 정렬 x가 낮은 순으로 2차정렬
    const sortedNode = nodeinfo.map((el, idx) => [...el, idx + 1])
        .sort((a, b) => a[1] === b[1] ? a[0] - b[0] : b[1] - a[1]);
    const order = (arr) => {
        const [x, y, node] = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            const curNode = arr[i];
            if (curNode[0] < x) left.push(curNode);
            else right.push(curNode);
        }

        preArr.push(node);
        if (left.length) order(left);
        if (right.length) order(right);
        postArr.push(node);
    }

    order(sortedNode)

    return [preArr, postArr];
}

console.log(solution([[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]]));