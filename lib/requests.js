import request from '../config/api';

export const getRequests = () => {
    return request.get("/request")
}

export const aceptRequest = (id) => {
    return request.put(`request/accept/${id}`)
}

export const rejectRequest = (id) => {
    return request.put(`request/reject/${id}`)
}