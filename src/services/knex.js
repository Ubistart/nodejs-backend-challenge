const knex = require('knex')({
	client: process.env.DB_CLIENT,
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USERNAME,
		database: process.env.DB_DATABASE,
		password: process.env.DB_PASSWORD,
		port: parseInt(process.env.DB_PORT ?? '5432', 10),
	},
});

module.exports = knex;
