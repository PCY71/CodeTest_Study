/*42893번 문제
매칭 점수*/

function solution(word, pages) {
    let answer = [0, 0]; //[index,score]
    const meta_reg = /<meta property.+content="https.*\/>/gm;
    const url_reg = /"https.*"/g;
    const link_reg = /<a href=.+>/gm;
    const page_data = []; //object 형식으로 저장

    //page 초기화
    for (let i = 0; i < pages.length; i++) {
        page_data.push({
            "idx": i,
            "url": '',
            "basic_score": 0,
            "link_score": 0,
            "link_to": [],
        })
    }

    //각 page의 url과 기본점수 초기화
    pages.forEach((page, i) => {
        //url 추출
        const url = page.match(meta_reg)[0].split(' ')[2].match(url_reg)[0].replace(/"/g, '');
        page_data[i].url = url
        page_data[i].basic_score = page.toLowerCase().split(/[\d|\W]/).filter((el) => el.length > 0).filter((el) => el === word.toLowerCase()).length // 기본 점수 계산
        page_data[i].link_to = page.match(link_reg).map((url) => url.match(url_reg)[0].replace(/"/g, ''));   //링크된 페이지 추가
    })

    //링크점수 계산
    page_data.forEach((data) => {
        const length = data.link_to.length;
        if (length > 0) {
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < page_data.length; j++) {
                    if (page_data[j].url === data.link_to[i]) {
                        page_data[j].link_score += data.basic_score / length;
                        break;
                    }
                }

            }
        }
    })

    //통합 점수 비교
    page_data.forEach((data, i) => {
        const score = data.basic_score + data.link_score;
        if (score > answer[1]) answer = [i, score]
    })
    return answer[0];
}

console.log(solution("blind", ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://a.com\"/>\n</head>  \n<body>\nBlind Lorem Blind ipsum dolor Blind test sit amet, consectetur adipiscing elit. \n<a href=\"https://b.com\"> Link to b </a>\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://b.com\"/>\n</head>  \n<body>\nSuspendisse potenti. Vivamus venenatis tellus non turpis bibendum, \n<a href=\"https://a.com\"> Link to a </a>\nblind sed congue urna varius. Suspendisse feugiat nisl ligula, quis malesuada felis hendrerit ut.\n<a href=\"https://c.com\"> Link to c </a>\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://c.com\"/>\n</head>  \n<body>\nUt condimentum urna at felis sodales rutrum. Sed dapibus cursus diam, non interdum nulla tempor nec. Phasellus rutrum enim at orci consectetu blind\n<a href=\"https://a.com\"> Link to a </a>\n</body>\n</html>"]));
console.log(solution("Muzi", ["<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://careers.kakao.com/interview/list\"/>\n</head>  \n<body>\n<a href=\"https://programmers.co.kr/learn/courses/4673\"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>", "<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://www.kakaocorp.com\"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href=\"https://hashcode.co.kr/tos\"></a>\n\n\t^\n</body>\n</html>"]));