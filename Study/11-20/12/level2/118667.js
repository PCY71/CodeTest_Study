function solution(queue1, queue2) {
    let answer = -1;
    let sum1 = sum(queue1);
    let total_sum = sum(queue1) + sum(queue2);
    let target_num = total_sum / 2;
    let start_idx1 = 0;
    let start_idx2 = 0;
    let len = queue1.length + queue2.length;

    if (total_sum % 2 === 1) return -1;
    else if (sum1 === target_num) return 0;


    /**
     * 두 queue의 합을 입력받아 
     * 큰 queue의 시작 idx를 옮기고 작았던 queue에 추가해주는 함수
     * @param {Number} sum1 
     * @param {Number} target_num 
     * @returns 이동된 item
     */
    const moveItem = (sum1, target_num) => {
        let item = 0;
        if (sum1 > target_num) {
            item = queue1[start_idx1]
            queue2.push(item);
            start_idx1++;
        } else {
            item = queue2[start_idx2]
            queue1.push(item);
            start_idx2++;
        }
        return item;
    }

    for (let step = 0; step < len * 2; step++) {
        if (sum1 === target_num) {
            answer = step;
            break;
        }
        sum1 = sum1 > target_num ? sum1 - moveItem(sum1, target_num) : sum1 + moveItem(sum1, target_num);
    }

    return answer;
}

const sum = (arr) => arr.reduce((a, b) => a + b);

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2]));
console.log(solution([1, 1], [1, 5]));
