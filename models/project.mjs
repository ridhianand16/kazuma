import mongoose from 'mongoose'
import express from 'express'

var router = express.Router();

export const ProjectSchema = mongoose.Schema({
    projectID:
    {
        type: String,
        required: true
    },
    name: 
    {
        type: String,                                                                                                                                                                                                                                                       
        required: true
    },
    status:
    {
        type: String,
        enum: ['accepted','ongoing','inactive'],
        required: true
    },
    employerName:
    {
        type: String,
        required: true
    },
    currentBids:
    {
        type: Array,
        required: false
    },
    description:
    {
        type: String,
        required: false
    },
    skillsRequired:
    {
        type: Array,
        required: false
    }
})

export var Project =  mongoose.model('Project',ProjectSchema);

export default router;