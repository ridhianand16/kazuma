import mongoose from 'mongoose'
import express from 'express'

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

export var Employer =  mongoose.model('Employer',EmployerSchema);

export default router;