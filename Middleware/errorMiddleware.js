const errorMiddleware = (err, req, res, next) => {
    console.error(err.stack);

    // Mongoose Duplicate Key Error
    if (err.code && err.code === 11000) {
        const field = Object.keys(err.keyPattern)[0];
        const value = err.keyValue[field];
        return res.status(400).send({
            success: false,
            message: `The value '${value}' for the field '${field}' already exists, please provide a unique value.`,
            error: 'Duplicate Field Value'
        });
    }

    // Mongoose Validation Error
    if (err.name === 'ValidationError') {
        const errors = Object.values(err.errors).map(el => el.message);
        return res.status(400).send({
            success: false,
            error: 'Validation Error',
            message: errors.join('. ')
        });
    }

    // Default Error
    res.status(500).send({ 
        success: false, 
        message: 'Server Error', 
        error: err.message 
    });
};

module.exports = errorMiddleware;
