function solution(files) {
    files = files.map((el) => {
        let head = '';
        let num = '';
        let is_head_end = false;
        let pattern = /^[0-9]/
        for (const char of el) {
            if (!is_head_end && !pattern.test(char)) {
                head += char;
            } else {
                is_head_end = true;
                if (pattern.test(char)) {
                    num += char;
                } else {
                    break;
                }
            }
        }
        return [el, head.toLowerCase(), Number(num)];
    })

    files.sort((a, b) => {
        if (a[1] > b[1]) {
            return 1
        } else if (b[1] > a[1]) {
            return -1
        } else {
            if (a[2] > b[2]) {
                return 1
            } else if (b[2] > a[2]) {
                return -1;
            } else {
                return 0;
            }
        }
    })
    return files.map((el) => el[0]);
}
console.log(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"]));
console.log(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"]));