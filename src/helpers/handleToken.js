const jwt = require('jsonwebtoken');

function generateToken(info) {
	const token = jwt.sign(info, process.env.JWT_SECRET);
	return token;
}

module.exports = { generateToken };
