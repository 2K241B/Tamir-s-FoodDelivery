import jwt from 'jsonwebtoken';

const checktoken = (req, res, next) => {
    if (req.headers.cookie) {
        try {
            const token = req.headers.cookie.split('=')[1];
            const isToken = jwt.verify(token, process.env.SECRET_KEY); 
            req.body = isToken; 
            return next(); 
        } catch (error) {
            return res.status(403).send({ error: 'Invalid token' }); 
        }
    }
    return res.status(403).send({ error: 'No token provided' }); 
};

export default checktoken;
