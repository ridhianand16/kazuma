import Joi from 'joi'
import mongoose from 'mongoose'
import express from 'express'

var router = express.Router();

export const UserSchema = mongoose.Schema({
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
    skills: 
    {
        type: Array,
        required: false
    },
    projects:
    {
        type: Array,
        required: false
    },
})

export const validateUser = Joi.object({
    username: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    name: Joi.string(),
    skills: Joi.string()
})

export var User =  mongoose.model('User',UserSchema);

export default router;