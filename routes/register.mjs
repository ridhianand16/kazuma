import express from 'express'
import bcrypt from 'bcrypt'
import _ from 'lodash'
import jwt from 'jsonwebtoken'

import { User, validateUser } from '../models/freelancer.mjs'
import { Employer, validateEmployer } from '../models/employer.mjs'

var router = express.Router();

router.get('/',async (req, res) =>
{
	try
	{
		res.render('register')
	}
	catch (err) 
	{
		console.log(err)
		return res.statusCode(404)
	}
});

router.get('/employer', async(req,res) =>
{
	try
	{
		res.render('registerEmployer');
	}
	catch (err) 
	{
		console.log(err)
		return res.statusCode(404)
	}
});

router.get('/user', async(req,res) =>
{   
	try
	{
		res.render('registerUser');
	}
	catch (err) 
	{
		console.log(err)
		return res.statusCode(404)
	}
});

router.post('/user', async(req,res) =>
{
	try
	{
		console.log(req.body);
		const { error, value } = await validateUser.validate(req.body, { abortEarly: false });
		if (error) {
			return res.status(400).send(error.details[0].message);
		}

		let user = await User.findOne({ username: req.body.username });
		if (user) 
		{
			res.render('registerUser', {message: 'User already exists'});
		} 
		else 
		{
			user = new User(_.pick(req.body, ['username','name', 'email', 'password', 'skills']));
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(user.password, salt);
			await user.save();
			const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
			res.header('x-auth-token', token).send(_.pick(user, ['username', 'name', 'email']));

			res.render('login');  
		}
	}
	catch (err) 
	{
		console.log(err)
		return res.status(404);
	}
})

router.post('/employer', async(req,res) =>
{
	try
	{
		const { error, value } = await validateEmployer.validate(req.body, { abortEarly: false });
		
		if (error) {
			return res.status(400).send(error.details[0].message);
		}

		let emp = await Employer.findOne({ username: req.body.username });
		if (emp) 
		{
			return res.status(400).render('registerEmployer' , {message: 'User already exists'});
		} 
		else 
		{
			emp = new Employer(_.pick(req.body, ['username','name', 'email', 'password', 'contact', 'address']));
			const salt = await bcrypt.genSalt(10);
			emp.password = await bcrypt.hash(emp.password, salt);
			await emp.save();
			const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
			res.header('x-auth-token', token).send(_.pick(emp, ['username', 'name', 'email']));
			//idk if the following works
			//res.header('x-auth-token', token).send('employer');
			res.render('login');
		}
	}
	catch (err) 
	{
		console.log(err)
		return res.status(404)
	}
})

export default router;