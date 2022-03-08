const yup = require('yup');

const loginSchema = yup.object().shape({
	email: yup
		.string()
		.strict()
		.email()
		.required(),

	password: yup
		.string()
		.strict()
		.required(),
});

module.exports = { loginSchema };
