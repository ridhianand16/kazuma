import express from 'express';

const router = express.Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});

//module.export = Router;
export default router;