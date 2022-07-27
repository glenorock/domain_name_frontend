// const request = require('../config/epp').default
const request =require('../config/api').default

export async function checkDomain(name){
    const res = await request.post("/check/domain",{name})
    return res.data
}


export async function register(data){
    const res = await request.post("/register",data)
    return res.data
}

export async function info(name){
    const res = await request.post("/info",{name})
    return res.data
}
