const knex = require('../services/knex');

const insertInfo = async (table, values) => {
	const insertedInfo = await knex(table).insert(values).returning('*');
	return insertedInfo[0];
};

module.exports = { insertInfo };