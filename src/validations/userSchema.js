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

const createTaskSchema = yup.object().shape({
	description: yup
		.string()
		.strict()
		.required(),

	deadline: yup
		.object()
		.strict()
		.required()
		.test('equals', `É necessário adcionar um prazo para tarefa`, (date) => {
			const testDays = Object.keys(date.days).length === 0;
			const testHours = Object.keys(date.hours).length === 0;
			const testMinutes = Object.keys(date.minutes).length === 0;

			if (testDays && testHours && testMinutes)
				return true;
			return false;
		})
		.shape({
			days: yup
				.number()
				.strict()
				.min(0)
				.notRequired(),
			hours: yup
				.number()
				.strict()
				.min(0)
				.notRequired(),
			minutes: yup
				.number()
				.strict()
				.min(0)
				.notRequired()
		})
});
module.exports = { createUserSchema, createTaskSchema };
