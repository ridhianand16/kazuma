import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import jwt from 'jsonwebtoken';

import apiRoutes from './routes/api-routes.mjs' ;
import auth from './routes/auth.mjs';
import register from './routes/register.mjs';
import projects from './routes/projects.mjs';


const app = express();
dotenv.config()

//initializing db
mongoose.connect(process.env.DB_CONNECTION,
{ 
	useUnifiedTopology: true,
	useNewUrlParser: true
}).then(() => console.log("Database Connected!"))
.catch(err => console.log(JSON.stringify(err,undefined,2)));

var db = mongoose.connection;

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }))
app.set("view engine", "pug");
app.set("views", "./views");

app.use('/api/', apiRoutes);
app.use('/auth/',auth);
app.use('/register/',register);
app.use('/project/',projects);


app.get('/', async(req, res) => {
	res.render("layout");
});

app.post('/api', async(req,res) => {
	jwt.sign({
		username: user, 
		password: password
		}, privateKey, {algorithm: 'RS256'}, function (err,token){
		console.log(token);
	})
})																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																						

app.listen(9678, () => {
	console.log('listening on port 9678');
});

