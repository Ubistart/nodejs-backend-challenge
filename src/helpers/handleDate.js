const dateFns = require('date-fns');

const addTime = (date, timeToAdd) => dateFns.add(date, timeToAdd);

module.exports = {
	addTime,
};
