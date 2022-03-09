const { Router } = require('express');
const { login } = require('./controllers/login');
const { createUser } = require('./controllers/user');
const { createTask, finalizeTask } = require('./controllers/task');

const { loginSchema } = require('./validations/loginSchema');
const { createUserSchema } = require('./validations/userSchema');
const { createTaskSchema, finalizeTaskSchema } = require('./validations/taskSchema')

const authentication = require('./middlewares/authentication');
const { validateBody, validateParams } = require('./middlewares/validateRequest');

const routes = Router();

routes.get('/', (_, response) => response.status(200).json({ message: 'Teste OK' }));

routes.post('/login', validateBody(loginSchema), login);
routes.post('/user/create', validateBody(createUserSchema), createUser);

routes.post('/task/finalize/:id', authentication, validateParams(finalizeTaskSchema), finalizeTask);
routes.post('/task/create', authentication, validateBody(createTaskSchema), createTask);

module.exports = routes;
