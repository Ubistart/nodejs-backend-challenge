const validateRequest = (req) => async (request, response, next) => {
	try {
		if (req) { await req.validate(request); }
		next();
	} catch (error) {
		return response.status(500).json(error.message);
	}
};

const validateBody = (body) => async (request, response, next) => {
	try {
		if (body) { await body.validate(request.body); }
		next();
	} catch (error) {
		return response.status(500).json(error.message);
	}
};

module.exports = { validateRequest, validateBody };
