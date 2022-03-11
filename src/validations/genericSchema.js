const yup = require('yup');

const testParamsSchema = yup.object().shape({
	id: yup
		.string()
		.strict()
		.uuid()
		.required()
});

const checkEmptyRequestSchema = yup.object().test(
	'equals',
	`É necessário adcionar alguma informção para prosseguir`,
	(request) => JSON.stringify(request.body) !== '{}');

module.exports = { testParamsSchema, checkEmptyRequestSchema }