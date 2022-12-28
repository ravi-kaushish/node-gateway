exports.Auth = async (req, res, next) => {
    if (process.env.AUTHENTICATION === "enabled") {
        if (req.headers.authorization) {
            if (process.env.BASIC_AUTH == "enabled") {
                if (req.headers.authorization === `Basic ${Buffer.from(`${process.env.BASIC_AUTH_USERNAME}:${process.env.BASIC_AUTH_PASSWORD}`).toString('base64')}`) {
                    next();
                } else {
                    res.status(401).send({
                        message: "Invalid authorization headeraaaaa"
                    });
                }
            } else if (process.env.JWT_AUTH === "enabled") {
                //check jwt auth here
            } else {
                res.status(401).send({
                    message: "Invalid authorization headerssssss"
                });
            }
        } else {
            res.status(401).send({
                message: "Invalid authorization headercccccccccc"
            });
        }
    } else {
        next();
    }
};