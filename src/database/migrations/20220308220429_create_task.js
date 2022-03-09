exports.up = async function (knex) {
	return knex.schema.createTable('task', (table) => {
		table.uuid('id').unique().notNullable();
		table.uuid('userId').notNullable();
		table.string('description', 255).notNullable();
		table.timestamp('deadline').notNullable();
		table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
		table.timestamp('updatedAt').nullable();
		table.timestamp('deletedAt').nullable();
		table.timestamp('completedAt').nullable();
		table.foreign('userId').references('id').inTable('users');
	});
};

exports.down = function (knex) {
	return knex.schema.dropTable('task');
};