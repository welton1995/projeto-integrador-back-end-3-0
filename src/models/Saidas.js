const mongoose = require('mongoose');

const saidaSchema = new mongoose.Schema({
    chaves: { type: mongoose.Schema.Types.ObjectId, ref: 'Chaves', required: true },
    quantidade: { type: Number, required: true },
    data: { type: Date, default: Date.now }
});

const Saidas = mongoose.model('Saida', saidaSchema);

module.exports = Saidas;