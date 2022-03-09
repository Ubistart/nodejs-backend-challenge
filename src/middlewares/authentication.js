const { validateToken } = require('../helpers/handleToken');
const { findOneBy } = require('../helpers/handleKnex');
const { clearUserObject } = require('../helpers/utils');

const authentication = async (request, response, next) => {
	try {
		const { authorization } = request.headers;

		if (!authorization)
			return response.status(400).json('Você não possui autorização para prosseguir.');

		const token = authorization.replace('Bearer', '').trim();
		const tokenInfo = await validateToken(token);

		const { id, email } = tokenInfo;

		const userBD = await findOneBy('users', { id, email });

		if (!userBD)
			return response.status(404).json('Token inválido');

		const user = clearUserObject(userBD);
		request.user = user;
		next();
	} catch (error) {
		return response.status(400).json('Auth Error');
	}
};

module.exports = authentication;