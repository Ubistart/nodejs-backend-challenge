const { Router } = require('express');
const { login } = require('./controllers/login');
const { createUser } = require('./controllers/user');
const { createTask, finalizeTask, updateTask } = require('./controllers/task');

const { loginSchema } = require('./validations/loginSchema');
const { createUserSchema } = require('./validations/userSchema');
const { createTaskSchema, updateTaskSchema } = require('./validations/taskSchema');
const { testParamsSchema, checkEmptyRequestSchema } = require('./validations/genericSchema');

const authentication = require('./middlewares/authentication');
const { validateBody, validateParams, validateRequest } = require('./middlewares/validateRequest');

const routes = Router();

routes.get('/', (_, response) => response.status(200).json({ message: 'Teste OK' }));

routes.post('/login', validateBody(loginSchema), login);
routes.post('/user/create', validateBody(createUserSchema), createUser);

routes.post('/task/create', authentication, validateBody(createTaskSchema), createTask);
routes.post('/task/finalize/:id', authentication, validateParams(testParamsSchema), finalizeTask);
routes.post('/task/update/:id', authentication, validateRequest(checkEmptyRequestSchema), validateParams(testParamsSchema), validateBody(updateTaskSchema), updateTask);

module.exports = routes;
