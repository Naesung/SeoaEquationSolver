function main(input) {
    //괄호 체크
    let braketchk=0
    for(let i=0;i<input.length;i++){
        if(input.charAt(i)==='(')braketchk++
        else if(input.charAt(i)===')')braketchk--
    }
    if(braketchk){
        return invalid(input)
    }
    //식에 사용가능한 문자 판별
    if(input.match(/[a-z|A-Z|0-9|' '|'+'|'-'|'*'|'\/'|'='|'^'|','|'('|')'|'{'|'}'|'['|'\]'|'√']/g).length!==input.length){
        return invalid(input)
    }
    const equation = input.split(',')
    if (equation.length === 1){//식의 개수 판별
        //식이 몇개의 변수를 사용하는지 확인
        let alphachk=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let temp=0
        for (let i = 0; i < alphachk.length; i++) {
            temp+=equation[0].includes(alphachk[i])       
        }
        switch(temp){
            case 0:
                //변수 없는 식
                return NotSupporting(input)
            case 1:
                //일반식
                break
            default: 
                //다문자식
                return NotSupporting(input)
        }
        const chk = equation[0].split("=").length
        if (chk === 1){
            //함수
            return NotSupporting(input)
        } else if (chk === 2) {
            if(equation[0].split("=")[0].slice(-1)===">"||equation[0].split("=")[0].slice(-1)==="<"){
                //부등식 
                return NotSupporting(input)
            }else{
                //방정식
                return equa(equation[0])
            }
        } else {
            //연립식
            return NotSupporting(input)
        }
    } else {
        //연립식
        return NotSupporting(input)
    }
}

function equa(input){
    let stack = []
    for (let i = 0; i < input.length; i++) {
        const elem = input.charAt(i)
        if(elem==='('){
            stack.push(i)
        }else if(elem===')'){
            stack.pop()
            //1) 괄호 안의 부분을 계산하는 함수를 제작
            //2) 그 함수값으로 괄호 내부를 replace한다
            //3)캬ㅏㅏㅏ 빛이나는 알고리즘
        }
    }
    return input
}
function invalid(input) {
    return '식 ' + input + '는 잘못된 식입니다'
}
function NotSupporting(input) {
    return '식 ' + input + '는 서포트 되지 않는 식입니다'
}