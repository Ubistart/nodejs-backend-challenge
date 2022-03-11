const knex = require('../services/knex');

const insertInfo = async (table, values) => {
	const insertedInfo = await knex(table).insert(values).returning('*');
	return insertedInfo[0];
};

const findOneBy = async (table, conditons) => {
	const info = await knex(table).where(conditons).first();
	return info;
};

const updateInfo = async (table, conditions, values) => {
	const info = await knex(table).where(conditions).update({ values, ...updatedAt = new Date() }).returning('*');
	return info;
}

module.exports = { insertInfo, findOneBy, updateInfo };