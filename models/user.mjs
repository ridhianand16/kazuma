import mongoose from 'mongoose'
import Schema from mongoose.Schema

const User = new Schema({
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
    isCoder: 
    {
        type: Boolean,
        default: false
    }
})

export default mongoose.model('user',user);