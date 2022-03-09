const yup = require('yup');

const createUserSchema = yup.object().shape({
	email: yup
		.string()
		.strict()
		.email()
		.required(),

	password: yup
		.string()
		.strict()
		.required(),

	confimPassword: yup
		.string()
		.strict()
		.required()
		.oneOf([yup.ref('password'), null], 'Passwords do not match'),
});


module.exports = { createUserSchema };
