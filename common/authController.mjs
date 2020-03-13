import User from '../models/user.mjs'
import config from '../config.mjs'
import express from 'express'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

var router = express.Router();
router.use(bodyParser.urlencoded({
     extended: false }));
router.use(bodyParser.json());

var register = async function(req,res)
{
	try
	{
		var hashedPassword = bcrypt.hashSync(req.body.password, 8);
		User.create({
			username : req.body.username,
			email : req.body.email,
			password : hashedPassword,
			isFreelancer: req.body.isFreelancer
		},
		function (err, user) {
			if (err) return res.status(500)
				.send("There was a problem registering the user.")
			var token = jwt.sign({
					id: user._id 
				},
				config.masterKey, {
				expiresIn: 86400 // expires in 24 hours
			});
			res.status(200).send({
				auth: true, token: token
			});
		}); 
	}
	catch(err)
    {
        console.log(err);
        return res.status(400).json({status: 400, message: "User Creation was Unsuccesfull"});
    }
}

export var register;
export default router;