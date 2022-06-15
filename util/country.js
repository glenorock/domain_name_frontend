const countries = require("../data/CountryCodes.json")

const getCountryByCode = (code) => {
    let tmp = countries.find(ele => ele.code === code)
    return tmp ? `${tmp.name} (${tmp.code})` : ""
}

module.exports = {
    getCountryByCode
}