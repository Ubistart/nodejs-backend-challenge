const bcrypt = require('bcrypt');

function encryptPassword(password) {
	return bcrypt.hash(password, 10);
}

function comparePasswords(firstPass, secondPass) {
	return bcrypt.compare(firstPass, secondPass);
}

module.exports = { encryptPassword, comparePasswords };
