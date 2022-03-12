const dateFns = require('date-fns');

const compareDate = (date, dateToCompare) => dateFns.isBefore(date, dateToCompare);

module.exports = { compareDate };
