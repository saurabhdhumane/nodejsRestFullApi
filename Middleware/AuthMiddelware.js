const jwt = require('jsonwebtoken');
const { isTokenBlacklisted } = require('../util/jwt');

const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).send({
            success: false,
            message: 'Authorization Declined'
        });
    }

    const token = authHeader.split(' ')[1];

    // Check if the token is blacklisted
    if (isTokenBlacklisted(token)) {
        return res.status(401).send({
            success: false,
            message: 'Token is invalidated'
        });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRETE_KEY);
        req.user = { userId: payload.userId };
        next();
    } catch (error) {
        return res.status(401).send({
            success: false,
            message: 'Invalid or Expired Token'
        });
    }
};

module.exports = userAuth;
