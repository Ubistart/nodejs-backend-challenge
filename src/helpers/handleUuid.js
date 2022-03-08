const uuid = require('uuid');

const generateUuid = (info) => uuid.v4(info);

module.exports = { generateUuid };