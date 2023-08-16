/*42577 문제
전화번호 목록*/

function solution(phone_book) {
    const len = phone_book.length;
    const set = new Set(phone_book);

    for (let i = 0; i < len; i++) {
        const num = phone_book[i];
        for (let j = 1; j <= phone_book[i].length; j++) {
            const str = phone_book[i].substr(0, j);
            if (num !== str && set.has(str)) return false;
        }
    }
    return true;
}

const book1 = ["119", "97674223", "1195524421"];
const book2 = ["123", "456", "789"];
const book3 = ["12", "123", "1235", "567", "88"];

console.log(solution(book1));
console.log(solution(book2));
console.log(solution(book3));