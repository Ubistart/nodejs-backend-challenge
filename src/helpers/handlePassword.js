const bcrypt = require('bcrypt');

function encryptPassword(password) {
	return bcrypt.hash(password, 10);
}

module.exports = { encryptPassword }