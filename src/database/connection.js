const mongoose = require('mongoose');

const connection = () => {
  try {
    mongoose.connect('mongodb+srv://admin:admin123@cluster0.zxgz5wi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Banco de Dados Conectado com Sucesso!');
  } catch (error) {
    console.log('Falha ao conectar no Banco do Dados');
    console.log(error);
  }
}

module.exports = connection;