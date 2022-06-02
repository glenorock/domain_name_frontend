export function checkOperator (number){
    let mtnReg =RegExp(/^6(5[0-4]|7\d|8)\d+$/)
    let orangeReg =RegExp(/^6(9|5[5-9])\d+$/)
    if(mtnReg.test(number)){
        return "MTN"
    }else if(orangeReg.test(number)){
        return "Orange"
    }else{
        return "Unknown Operator"    
    }
}

export function PaymentValidationMessage(operator){
    switch(operator){
        case "Momo":
            return getMessage_MTN()
        case "OM":
            return getMessage_ORANGE()
        default:
            return `unknown payment method`
    }
}

const getMessage_MTN = () =>{
    
}

const getMessage_ORANGE = () => {

}