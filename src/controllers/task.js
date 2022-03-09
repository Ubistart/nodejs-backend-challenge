const { addTime } = require('../helpers/handleDate');
const { generateUuid } = require('../helpers/handleUuid');
const { insertInfo, findOneBy } = require('../helpers/handleKnex');

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

async function updateTask(user, transaction) {
	const { user } = requst;
	const { taskId } = requst.params;
	const { description, deadline, completed } = requst.body;

	const taskInfo = findOneBy('task', { id: taskId });

	if (!taskInfo)
		return response.status(400).json('Task inexistente')

	if (taskInfo.userId !== user.id)
		return response.status(400).json('Tarefa não pertence a este usuario')

	if (taskInfo.completedAt)
		return response.status(400).json('Não é possível editar uma tarefa concluída')

	const now = new Date();

	const updatedTask = {
		id: taskId,
		description,
		updatedAt: now,
		completedAt: completed ? now : null
	};

	if (deadline) {

	}

}

module.exports = { createTask, updateTask };