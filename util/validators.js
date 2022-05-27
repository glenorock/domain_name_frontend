export const validateEmail = (email) => {
    // The email must be in the format user@domain.tld
    let regex = RegExp(/^[a-zA-z0-9].+@.+\..+$/)
    return regex.test(String(email))
}

export const validatePayerNumber = (number) => {
    /**
     * The number must:
     *      Consist only of digits
     *      Made up of exactly 9 digits
     *      Must have as operator either MTN or ORANGE
     */
    let tmp = String(number)
    let digitReg = RegExp(/^\d+$/)
    let mtnReg = RegExp(/^6(5[0-4]|7\d|80)\d+$/)
    let orangeReg = RegExp(/^6(9|5[5-9])\d+$/)

    if (tmp.length !== 9) {
        return false
    } else if (!digitReg.test(tmp)) {
        return false
    } else if (!mtnReg.test(tmp) || !orangeReg.test(tmp)) {
        return false
    }
    return true
}

export const validateAddresseV4 = (addr) => {
    /**
     * a V4 ip addresse must follow the following 
     */
}

export const validateAddresseV6 = (addr) => {

}

export const validateDomainName = (domain) => {

}

export const validateHostName = (domain, host) => {

}