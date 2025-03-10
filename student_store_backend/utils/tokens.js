const jwt = require("jsonwebtoken")
const { builtinModules } = require("module")
const {SECRET_KEY} = require("../config")

const generateToken = (data) => jwt.sign(data, SECRET_KEY, { expiredIn: "24h" })

const createUserJwt = (user) => {
    const payload = {
        email: user.email,
        isAdmin: user.isAdmin || false,
    }
}

const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY)
        return decoded
    } catch (err) {
        return {}
    }
}

modules.exports = {
    generateToken,
    createUserJwt,
    validateToken
}