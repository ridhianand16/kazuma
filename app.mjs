import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import apiRoutes from './routes/api-routes.mjs' 
//import { render } from 'pug';

const app = express();
dotenv.config()

//initializing db
mongoose.connect('mongodb://localhost/resthub', 
{ 
  useUnifiedTopology: true,
  useNewUrlParser: true
});
var db = mongoose.connection;

// temporary db
const ads = [
  {title: 'Hello, world (again)!'}
];

app.use('/api', apiRoutes);

//Helmet - enhance API's security
app.use(helmet());

//bodyParser - to parse JSON bodies into JS objects
app.use(bodyParser.json());

//CORS - 
app.use(cors());

//morgan - logs HTTP requests
app.use(morgan('combined'));

app.set("view engine", "pug");
app.set("views", "./views");

// defining an endpoint to return all ads
app.get('/', async(req, res) => {
  //res.send(ads);
  res.render("layout");
});


app.listen(9678, () => {
  console.log('listening on port 9678');
});

