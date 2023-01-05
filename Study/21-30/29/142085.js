/* 142085번 문제
디펜스 게임*/

function solution(n, k, enemy) {
    let answer = 0;
    const heap = new MaxHeap();

    for (let i = 0; i < enemy.length; i++) {
        const enemyNum = enemy[i];
        heap.push(enemyNum);

        if (n >= enemyNum) {
            n -= enemyNum;
            answer++;
        } else {
            if (k > 0) {
                k--;
                n = n + heap.pop() - enemyNum;
                answer++;
            } else {
                break;
            }
        }
    }

    return answer;
}

class MaxHeap {
    constructor() {
        this.val = [];
    }
    push(val) {
        this.val.push(val);
        this.heapifyUp();
    }
    heapifyUp() {
        let idx = this.val.length - 1;
        const element = this.val[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.val[parentIdx];
            if (element <= parent) break;
            this.val[parentIdx] = element;
            this.val[idx] = parent;
            idx = parentIdx;
        }
    }
    pop() {
        if (this.val.length <= 0) return undefined;

        const max = this.val[0];
        const end = this.val.pop();
        if (this.val.length > 0) {
            this.val[0] = end;
            this.hipifyDown();
        }
        return max;
    }
    hipifyDown() {
        let idx = 0;
        const element = this.val[0];
        while (true) {
            const leftIdx = idx * 2 + 1;
            const leftVal = this.val[leftIdx];
            const rightIdx = idx * 2 + 2;
            const rightVal = this.val[rightIdx];

            if (element < leftVal && element < rightVal) {
                const maxIdx = leftVal > rightVal ? leftIdx : rightIdx;
                this.val[idx] = this.val[maxIdx];
                this.val[maxIdx] = element;
                idx = maxIdx;
            } else if (element < leftVal) {
                this.val[idx] = leftVal;
                this.val[leftIdx] = element;
                idx = leftIdx;
            } else if (element < rightVal) {
                this.val[idx] = rightVal;
                this.val[rightIdx] = element;
                idx = rightIdx;
            } else break;
        }
    }
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
console.log(solution(2, 4, [3, 3, 3, 3]));
console.log(solution(100, 3, [54, 53, 52, 1, 1, 1, 1, 98, 99, 100]));