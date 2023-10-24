// import express, { Express, Request, Response , Application } from 'express';
const express = require('express');
import { Application, Request, Response } from 'express';
// import dotenv from 'dotenv';

//For env File 
// dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req:any, res:any) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});