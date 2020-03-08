import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';

import apiRoutes from '../routes/api-routes.mjs' 
import router from '../routes/api-routes.mjs';

const app = express();

router.post('/', (req, res) => {
  res.render('form', { title: 'Registration form' });
});

export default router;