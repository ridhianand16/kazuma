import register from '../common/authController.mjs'
import express from 'express'

var router = express.Router();

router.get('/register',async (req, res) =>
{
    try
    {
        res.render('register')
    }
    catch (err) {
        console.log(err)
        return res.statusCode(500)
    }
})
//user creation -------------------
router.post('/register', async(req,res) =>
{
    await register(req,res);
})

export default router;