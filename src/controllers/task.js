const { addTime } = require('../helpers/handleDate');
const { generateUuid } = require('../helpers/handleUuid');
const { insertInfo, findOneBy, updateInfo } = require('../helpers/handleKnex');

const createTask = async (request, response) => {
	try {
		const { user } = request;
		const { description, deadline } = request.body;

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

const finalizeTask = async (request, response) => {
	try {
		const { id } = request.params;
		const { id: userId } = request.user;
		const conditions = { id, userId };

		const task = await findOneBy('task', conditions)

		if (!task)
			return response.status(200).json('Tarefa inexistente ou não partence ao usuario');

		if (task.completedAt)
			return response.status(200).json('Tarefa já concluída');

		if (task.deletedAt)
			return response.status(200).json('Não é possível completar tarefas excluidas');

		const now = new Date();
		const taskCompleted = await updateInfo('task', conditions, { updatedAt: now, completedAt: now })

		if (!taskCompleted)
			return response.status(200).json('Falha ao atualizar a tarefa');

		return response.status(200).json(taskCompleted);
	} catch (error) {
		return response.status(400).json('Falha ao atualizar a tarefa')
	}
}

module.exports = { createTask, finalizeTask };