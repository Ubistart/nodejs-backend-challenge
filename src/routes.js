const { Router } = require('express');
const { login } = require('./controllers/login');
const { createUser } = require('./controllers/user');

const { loginSchema } = require('./validations/loginSchema');
const { createUserSchema } = require('./validations/userSchema');

const { validateBody } = require('./middlewares/validateRequest');

const routes = Router();

routes.get('/', (_, response) => response.status(200).json({ message: 'Teste OK' }));

routes.post('/login', validateBody(loginSchema), login);
routes.post('/create-user', validateBody(createUserSchema), createUser);

module.exports = routes;
