
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const connection = require('./database/connection');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
connection();

app.listen(PORT, ()=> {
  try {
    console.log(`Servidor rodando na porta ${PORT}!`)
  } catch (error) {
    console.log(error);
  }
});