import 'reflect-metadata';
import express from 'express';
import { routes } from './routes';
import './database/index'

const app = express();

app.use(routes);

app.use(express.json);

app.listen(5000, () => console.log('Server linener in port 5000'));
