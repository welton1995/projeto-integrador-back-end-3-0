const mongoose = require('mongoose');
const Entradas = require('./Entradas');

const chaveSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  codigo: {
    type: String,
    required: true,
    unique: true,
  },
  quantidade: {
    type: Number,
    required: true,
    default: 0,
  },
});

const Chaves = mongoose.model('Chaves', chaveSchema);

module.exports = Chaves;
