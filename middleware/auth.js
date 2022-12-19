const jwt = require('jsonwebtoken');

// require('dotenv').config();
const privateKey = '123456';

const verifyToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;

        const { token } = req;
        console.log('token ', token);

        jwt.verify(token, privateKey, (err, user) => {
            if (err) {
                console.log("err", err)
                // return res.sendStatus(403);
                return res.status(403).send({ status: false, message: err.message });
            }

            req.user = user;
            next();
        });

        // next();
    } else {
        res.status(403).send({ status: false, message: "Token not found" })
    }
}

module.exports = {
    verifyToken,
    privateKey
}