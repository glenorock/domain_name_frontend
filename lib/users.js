import request from '../config/api'

export const activateUser = (id) => {
    return request.put(`/activate/${id}`,{})
}

export const deactivateUser = (id) => {
    return request.put(`/deactivate/${id}`,{})
}

export const getUsers = () => {
    return request.get("/users")
}