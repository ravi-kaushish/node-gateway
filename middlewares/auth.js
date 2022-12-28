const jwt = require('jsonwebtoken');

exports.Auth = async (req, res, next) => {
    if (process.env.AUTHENTICATION === "enabled") {
        if (req.headers.authorization) {
            let auth_type = req.headers.authorization.split(" ")[0];
            if (process.env.BASIC_AUTH == "enabled" && auth_type=== "Basic") {
                if (req.headers.authorization === `Basic ${Buffer.from(`${process.env.BASIC_AUTH_USERNAME}:${process.env.BASIC_AUTH_PASSWORD}`).toString('base64')}`) {
                    next();
                } else {
                    res.status(401).send({
                        message: "Invalid authorization header"
                    });
                }
            } else if (process.env.JWT_AUTH === "enabled" && auth_type=== "Bearer") {
                jwt.verify(req.headers.authorization.replace("Bearer ", ""), process.env.JWT_AUTH_SIGNATURE, function (err, decoded) {
                    if (err) {
                        res.status(401).send({
                            message: "Invalid authorization header"
                        });
                    } else {
                        next();
                    }
                });
            } else {
                res.status(401).send({
                    message: "No authorization header provided"
                });
            }
        } else {
            res.status(401).send({
                message: "No authorization header provided"
            });
        }
    } else {
        next();
    }
};