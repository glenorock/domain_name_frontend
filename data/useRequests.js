export const getAllRequests  = async (page,limit) => {
    return [
        {
            id:1,
            domain:"one",
            date: Date.now(),
            status:"accepted"
        },
        {
            id:2,
            domain:"two",
            date: Date.now(),
            status:"pending"
        },
        {
            id:3,
            domain:"three",
            date: Date.now(),
            status:"pending"
        },
        {
            id:4,
            domain:"four",
            date: Date.now(),
            status:"rejected"
        },
        
    ]
}

export const updateRequest = async (request) => {

}