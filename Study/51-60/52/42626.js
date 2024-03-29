/*42626 문제
더 맵게*/

/** 1. Minheap
 * size : heap 원소들의 개수 출력
 * getMin : 최소값 출력
 * swap : heap 구조 유지를 위해 원소 교환(push, pop에서 사용)
 * push : heap에 원소 추가
 * pop : heap에서 최소값 추출
 */
class MinHeap {
    constructor() {
        this.heap = [null];
    }

    size() {
        return this.heap.length - 1;
    }

    getMin() {
        return this.heap[1] ? this.heap[1] : null;
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    push(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = (curIdx / 2) >> 0;

        while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
            this.swap(parIdx, curIdx)
            curIdx = parIdx;
            parIdx = (curIdx / 2) >> 0;
        }
    }

    pop() {
        const min = this.heap[1];
        if (this.heap.length <= 2) this.heap = [null];
        else this.heap[1] = this.heap.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        if (!this.heap[leftIdx]) return min;
        if (!this.heap[rightIdx]) {
            if (this.heap[leftIdx] < this.heap[curIdx]) {
                this.swap(leftIdx, curIdx);
            }
            return min;
        }

        while (this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]) {
            const minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
            this.swap(minIdx, curIdx);
            curIdx = minIdx;
            leftIdx = curIdx * 2;
            rightIdx = curIdx * 2 + 1;
        }

        return min;
    }
}

function solution(scoville, K) {
    let answer = 0;
    const minHeap = new MinHeap();

    for (const food of scoville) {
        minHeap.push(food);
    }

    while (minHeap.getMin() < K) {
        if (minHeap.size() === 1) {
            return -1
        }
        minHeap.push(minHeap.pop() + minHeap.pop() * 2);
        answer++
    }

    return answer;

}

console.log(solution([1, 2, 3, 9, 10, 12], 7));