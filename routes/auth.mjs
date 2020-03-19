import express from 'express'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import jwt from 'jsonwebtoken'

import { User } from '../models/freelancer.mjs'
import { Employer } from '../models/employer.mjs'

var router = express.Router();

async function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };
 
    return Joi.validate(req, schema);
}

router.post('/user', async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    let user = await User.findOne({ email: req.body.username });
    if (!user) {
        return res.status(400).send('Incorrect username.');
    }
 
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect password.');
    }
 
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.send(token);
});
 
router.post('/employer', async (req, res) => {
    
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    let emp = await Employer.findOne({ username: req.body.username });
    if (!user) {
        return res.status(402).send('Incorrect username');
    }
 
    const validPassword = await bcrypt.compare(req.body.password, emp.password);
    if (!validPassword) {
        return res.status(403).send('Incorrect password.');
    }
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.send(token);
});

export default router;