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