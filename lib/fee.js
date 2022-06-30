const request = require('../config/api').default;

const pay = async (data) => {
    const res = await request.post('/pay',data);
    return res.data;
}

module.exports = {pay}