import jwt from 'jsonwebtoken';

const CheckRole = (req, res, next) => {
    const { user } = req.body;
    if (user.role !== 'admin') {
        return res.status(403).send({ error: 'Permission denied' });
    }
    next();
};

export default CheckRole;
