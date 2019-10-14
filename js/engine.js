function main(input) {
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
    return "문자 1개인 다항방정식입니다. 이런형태의 식이라는것을 확인했습니다."

}

function NotSupporting(input) {
  return '식 ' + input + '는 서포트 되지 않는 식입니다'
}