const { addTime } = require('../helpers/handleDate');
const { insertInfo } = require('../helpers/handleKnex');
const { generateUuid } = require('../helpers/handleUuid');

const createTask = async (requst, response) => {
	try {
		const { user } = requst;
		const { description, deadline } = requst.body;

		const newTask = {
			id: generateUuid(description),
			userId: user.id,
			description,
			deadline: addTime(new Date(), deadline),
		};

		const insertedTask = await insertInfo('task', newTask);

		if (!insertedTask)
			return response.status(400).json('Falha ao criar tarefa');

		return response.status(200).json('Tarefa cadastrada com sucesso!');
	} catch (error) {
		return response.status(400).json('Falha ao criar tarefa')
	}
}

module.exports = { createTask };