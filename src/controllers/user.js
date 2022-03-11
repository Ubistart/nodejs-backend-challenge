const { insertInfo } = require('../helpers/handleKnex');
const { generateUuid } = require('../helpers/handleUuid');
const { encryptPassword } = require('../helpers/handlePassword');

const createUser = async (request, response) => {
	try {
		const { email, password } = request.body;
		const encryptedPassword = await encryptPassword(password);

		await insertInfo('users', {
			id: generateUuid(email),
			email,
			userType: 'user',
			password: encryptedPassword,
		});

		return response.status(200).json('Usuario cadastrado com sucesso!')
	} catch (error) {
		return response.status(400).json('Falha ao cadastrar usuario')
	}
}

module.exports = { createUser };
