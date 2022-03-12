const yup = require('yup');
const { compareDate } = require('../helpers/handleDate');

const createTaskSchema = yup.object().shape({
	description: yup
		.string()
		.strict()
		.required(),

	deadline: yup
		.string()
		.strict()
		.required()
		.test('equals', `Não é possível adcionar um prazo de expiração anterior ao momento atual`, (deadline) => {
			const deadlineInDate = new Date(deadline);
			const isValidDate = compareDate(new Date(), deadlineInDate);
			return isValidDate;
		})
});

const updateTaskSchema = yup.object().shape({
	description: yup
		.string()
		.strict(),

	deadline: yup
		.string()
		.strict()
		.test('equals', `Não é possível adcionar um prazo de expiração anterior ao momento atual`, (deadline) => {
			if (deadline) {
				const deadlineInDate = new Date(deadline);
				const isValidDate = compareDate(new Date(), deadlineInDate);
				return isValidDate;
			}
			return true;
		})
});

module.exports = { createTaskSchema, updateTaskSchema }