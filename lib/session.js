import request from '../config/api';

export const login = (username,password) => {
    return request.post("/login",{
        username:username,
        password:password
    })
}

export const logout = () => {
    return request.post("/logout")
}