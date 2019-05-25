var jwt = require('jsonwebtoken');
const APP_SECRET = 'my-ultra-secret-password'

const getUserId = ctx => {
    const authorization = ctx.request.get('Authorization')
    if (authorization) {
        const token = authorization.replace('Bearer ', '')
        console.log(jwt.verify(token, APP_SECRET))
    }
}

module.exports = {
    APP_SECRET,
    getUserId,
}