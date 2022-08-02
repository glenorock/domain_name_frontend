export const checkRegistrationPeriod = (num) => {
    let tmp = Number(num)
    if (!Number.isInteger(tmp)) {
        return {
            value:false,
            motif:"Input must be an integer"
        }
    }
    if (tmp <= 0){
        return {
            value: false,
            motif: "Registration must be done for atleast one year"
        }
    }
    if (tmp > 5){
        return {
            value: false,
            motif: "Registration cannont be done for more than five years"
        }
    }
    return {
        value: true,
        motif:"All criteria respected"
    }
}

/**
 * 
 * @param {string} password
 * The password is at least 8 characters long (?=.{8,}).
 * The password has at least one uppercase letter (?=.*[A-Z]).
 * The password has at least one lowercase letter (?=.*[a-z]).
 * The password has at least one special character ([^A-Za-z0-9]). 
 */
export const validatePassword = (password) => {
    let tmp = String(password)
    let regex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,})')
    if (regex.test(tmp)){
        return {
            value: true,
            motif: "All criteria respected"
        }
    }else{
        return {
            value:false,
            motif:"Password must be at least 8 characters long and have at least one uppercase letter, at least one lowercase letter and at least one special character"
        }
    }
}