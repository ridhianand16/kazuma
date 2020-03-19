import mongoose from 'mongoose'
import express from 'express'
import Joi from 'joi'

var router = express.Router();

export const EmployerSchema = mongoose.Schema({
	username: 
	{
		type: String,
		required: true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
	},
	name: 
	{
		type: String,                                                                                                                                                                                                                                                       
		required: true
	},
	email: 
	{
		type: String,
		required: true
	},
	password: 
	{
		type: String,
		required: true
	},
	contact:
	{
		type: String,
		required: false
	},
	address:
	{
		type: String,
		required: false
	},
	projects:
	{
		type: Array,
		required: false
	},
})

export const validateEmployer = Joi.object({
	username: Joi.string().min(5).max(50).required(),
	name: Joi.string(),
	email: Joi.string().min(5).max(255).required().email(),
	password: Joi.string().min(5).max(255).required(),
	contact: Joi.number().integer().min(1000000000).max(9999999999),
	address: Joi.string()
})

export var Employer =  mongoose.model('Employer',EmployerSchema);

export default router;