module.exports = (validations) => {
    return async (request, response, next) => {
        for (const validation of validations) {
            const result = await validation.run(request);
            if (!result.isEmpty()) {
                return response.status(400).json({ errors: result.array() })
            }
        }
        next();
    }
}

