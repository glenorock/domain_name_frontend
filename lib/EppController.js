const request = require('../config/epp').default
export async function checkDomain(name) {
    const res = await request.get(`/check/domain/${name}`)
    return res.data
}

export async function getDomain(name) {
    const res = await request.get(`/info/domain/${name}`)
    return res.data
}

// updates

// creations
export async function createDomain(data) {
    await request.post('')
    return true
}

export async function createContact(data){
    return true
}

export async function createHost(data){
    return true
}

