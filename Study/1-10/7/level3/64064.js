/* 64064번 문제
불량 사용자*/

function solution(user_id, banned_id) {
    let answer = new Set();

    const filterBanList = (user_list, banId) => {
        //모든 글자가 *인 경우
        if (banId.replace(/[*]/g, '').length === 0) {
            return user_list.filter((el) => el.length === banId.length)
        } else {
            let rule = new RegExp(banId.split('*').join('[a-z0-9]'))
            return user_list.filter((el) => el.replace(rule, '').length === 0)
        }
    }

    const checkBanList2 = (idx = 0, list = []) => {
        if (idx === banned_id.length) {
            let set = new Set(list);
            if ([...set].length === banned_id.length) {
                answer.add([...set].sort((a, b) => a > b ? 1 : -1).join());
            }
            return;
        }

        const cur_check_banId = banned_id[idx];
        const match_list = filterBanList(user_id, cur_check_banId);
        match_list.forEach((item) => {
            checkBanList2(idx + 1, [...list, item])
        })

    }
    checkBanList2(0, []);
    /*
         const checkBanList1 = (user_list, banned_list, ban_arr) => {
             let cur_check_banId = banned_list[0];
             let rest_banned_list = banned_list.slice(1);
    
             const match_list = filterBanList(user_list, cur_check_banId);
            
             //밴리스트가 남은 경우 다음 체크 진행
             if(rest_banned_list.length > 0){
                 for(const match of match_list){
                     let rest_user_list = user_list.filter((user) => user !== match);
                     let next_ban_arr = [...ban_arr, match];
                     checkBanList(rest_user_list, rest_banned_list, next_ban_arr);
                 }
             }else{
                 //모두 체크가 끝난 경우 경우의 수 추가
                 if(match_list.length > 0){
                     for(const match of match_list){
                         answer.add([...ban_arr, match].sort((a,b) => a > b ? 1 : -1).join());
                     }
                 }else{
                     answer.add(ban_arr.sort((a,b) => a > b ? 1 : -1).join());
                 }
    
             }
    
         }
    
         checkBanList1(user_id, banned_id, []);
    */

    return answer.size;
}

const test = [[["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"]],
[["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"]],
[["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"]]];

console.log(solution(test[0][0], test[0][1]));
console.log(solution(test[1][0], test[1][1]));
console.log(solution(test[2][0], test[2][1]));