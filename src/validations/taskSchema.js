const yup = require('yup');

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
			const valuesToTest = [date.days, date.hours, date.minutes];
			const test = valuesToTest.every(test => test === 0 || test === undefined);
			return !test;
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

const updateTaskSchema = yup.object().shape({
	description: yup
		.string()
		.strict(),

	deadline: yup
		.object()
		.strict()
		.test('equals', `É necessário adcionar um prazo para tarefa`, (date) => {
			if (JSON.stringify(date) === '{}') {
				const valuesToTest = [date.days, date.hours, date.minutes];
				const test = valuesToTest.every(test => test === 0 || test === undefined);
				return !test;
			}
			return true;
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

module.exports = { createTaskSchema, updateTaskSchema }