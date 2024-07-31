const success = (req, res, message, status) => {
    res.status(status).send({
        error: false,
        status: status,
        body: message,
    });
};

const error = (req, res, message, status) => {
    res.status(status).send({
        error: true,
        status: status,
        body: message,
    });
};

export default {
    success,
    error,
};