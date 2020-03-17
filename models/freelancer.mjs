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

export var User =  mongoose.model('User',UserSchema);

export default router;