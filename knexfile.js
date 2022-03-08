require('dotenv').config();

module.exports = {
	client: process.env.DB_CLIENT,
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USERNAME,
		database: process.env.DB_DATABASE,
		password: process.env.DB_PASSWORD,
		port: parseInt(process.env.DB_PORT ?? '5432', 10),
	},
	migrations: {
		directory: 'src/database/migrations',
		extension: 'js',
	},
	seeds: {
		directory: 'src/database/seeds',
		extension: 'js',
		timestampFilenamePrefix: true,
	},
};
