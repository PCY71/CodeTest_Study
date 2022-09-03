/* 49993번 문제
스킬트리*/

function solution(skill, skill_trees) {
    let answer = 0;
    for (const skill_tree of skill_trees) {
        let idx = 0;
        let is_valid = true;
        for (const cur_skill of skill_tree) {
            //스킬트리가 존재하는 스킬일 때
            if (skill.includes(cur_skill)) {
                //제대로 배운 경우
                if (skill.indexOf(cur_skill) === idx) idx++
                //잘 못 배운 경우
                else {
                    is_valid = false;
                    break;
                }
            }
        }
        answer = is_valid ? answer + 1 : answer;
    }
    return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));