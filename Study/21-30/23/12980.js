/* 12980번 문제
점프와 순간 이동*/

function solution(n) {
    /*
    let dp = [0,1];
    for(let i = 1; i <= n; i++){
        if(dp[i]){
            dp[i*2] = dp[i];
        }else{
            let dif = 0;
            while(dp[i-dif] === undefined){
                dif++;
            }
            dp[i] = dp[i-dif] + dif;
            dp[i*2] = dp[i];
        }
    }

    return dp[n];
    */
    let cost = 0;

    while (n > 0) {
        //홀수
        if (n % 2) {
            n = Math.floor(n / 2);
            cost++;
        } else {
            //짝수
            n = n / 2
        }
    }

    return cost;
}

console.log(solution(5));
console.log(solution(6));
console.log(solution(5000));