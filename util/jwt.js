const jwt = require('jsonwebtoken');

let tokenBlacklist = [];

const createJwt = async (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRETE_KEY, { expiresIn: '1d' });
};

const logout = async (token) => {
    tokenBlacklist.push(token);
};

const isTokenBlacklisted = (token) => {
    return tokenBlacklist.includes(token);
};

module.exports = { createJwt, logout, isTokenBlacklisted };
