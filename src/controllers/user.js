const { insertInfo } = require('../helpers/handleKnex');
const { generateUuid } = require('../helpers/handleUuid');
const { encryptPassword } = require('../helpers/handlePassword');

const createUser = async (requst, response) => {
	try {
		const { email, password } = requst.body;
		const encryptedPassword = await encryptPassword(password);

		const newUser = {
			id: generateUuid(email),
			email,
			userType: 'user',
			password: encryptedPassword,
		}

		const insertedUser = insertInfo('users', newUser)

		if (!insertedUser)
			return response.status(400).json('Falha ao cadastrar usuario')

		return response.status(200).json('Usuario cadastrado com sucesso!')
	} catch (error) {
		return response.status(400).json('Falha ao criar usuario')
	}
}

module.exports = { createUser };
