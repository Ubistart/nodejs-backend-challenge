const { Router } = require('express');
const { createUser } = require('./controllers/user');

const { createUserSchema } = require('./validations/userSchema');

const { validateBody } = require('./middlewares/validateRequest');

const routes = Router();

routes.get('/', (_, response) => response.status(200).json({ message: 'Teste OK' }));

routes.post('/create-user', validateBody(createUserSchema), createUser);

module.exports = routes;
