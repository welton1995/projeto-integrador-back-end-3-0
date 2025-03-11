const mongoose = require('mongoose');

const servicoSchema = new mongoose.Schema({
  tipo: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  custo: {
    type: Number,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
    default: 0,
  },
  data: {
    type: Date,
    // default: Date.now()
  },
  observacao: {
    type: String,
  }
});

const Servicos = mongoose.model('Servicos', servicoSchema);

module.exports = Servicos;