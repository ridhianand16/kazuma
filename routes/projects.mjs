import express from 'express'
import _ from 'lodash'
import jwt from 'jsonwebtoken'

import  {Project} from '../models/project.mjs'

var router = express.Router();

router.get('/', async (req, res) => 
{
	try 
	{
		var query = Project.find();
		query.select('name projectID status employerName description skills')

		res.render('home', { courses: query});
	}
	catch (err) 
	{
		res.render('home');
	}
})

router.get('/:projectID', async (req, res) => {
	try
	{
		var id = req.params.projectID;
		var query = Project.find({'projectID': id});
		query.select('name projectID status employerName description skills')
		res.render('project', { course: query })
	}
	catch(err)
	{
		res.render('home');
	}
})