const bcrypt = require('bcrypt');

const encryptPassword = (password) => bcrypt.hash(password, 10);
const comparePasswords = (firstPass, secondPass) => bcrypt.compare(firstPass, secondPass);

module.exports = { encryptPassword, comparePasswords };
