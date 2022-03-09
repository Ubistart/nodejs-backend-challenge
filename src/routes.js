const { Router } = require('express');
const { login } = require('./controllers/login');
const { createUser } = require('./controllers/user');
const { createTask } = require('./controllers/task');

const { loginSchema } = require('./validations/loginSchema');
const { createUserSchema, createTaskSchema } = require('./validations/userSchema');

const authentication = require('./middlewares/authentication');
const { validateBody } = require('./middlewares/validateRequest');

const routes = Router();

routes.get('/', (_, response) => response.status(200).json({ message: 'Teste OK' }));

routes.post('/login', validateBody(loginSchema), login);
routes.post('/create-user', validateBody(createUserSchema), createUser);

routes.post('/create-task', authentication, validateBody(createTaskSchema), createTask);

module.exports = routes;
