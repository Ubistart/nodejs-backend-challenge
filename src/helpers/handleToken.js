const jwt = require('jsonwebtoken');

const generateToken = (info) => jwt.sign(info, process.env.JWT_SECRET);
const validateToken = async (tkn) => await jwt.verify(tkn, process.env.JWT_SECRET);

module.exports = { generateToken, validateToken };
