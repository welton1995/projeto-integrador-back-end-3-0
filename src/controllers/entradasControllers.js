const Chaves = require('../models/Chaves');
const Entradas = require('../models/Entradas');

const entradasControllers = {
  async listar(req, res) {
    try {
      const entradas = await Entradas.find().populate('chaves');

      res.status(200).json(entradas);
    } catch (error) {
      return console.log(error);
    }
  },

  async criar(req, res) {
    try {
      const { id } = req.params;
      const { quantidade} = req.body;

      if(!id){
        return res.status(400).json(`Chave não encontrada!`);
      }

      const chave = await Chaves.findByIdAndUpdate(
        id,
        { $inc: { quantidade: +quantidade } }, // adiciona a quantidade especificada
        { new: true } // retornar
    );

    if (!chave) {
        return res.status(404).send('Chave não encontrada.');
    }

      const entrada = await Entradas.create({
        chaves: id, quantidade
      });

      res.status(201).json(`Entrada realizada com sucesso!`);     
    } catch (error) {
      return console.log(error);
    }
  },

  async remover(req, res) {
    try {
       const { id } = req.params;
       const entradaExiste = await Entradas.findById(id);

       if(!entradaExiste){
        return res.status(200).json(`Entrada não encontrada!`);
       }

       await Entradas.findByIdAndDelete(id);

       return res.status(200).json(`Entrada excluida com sucesso!`);
    } catch (error) {
        console.log(error);
        res.status(400).json(`Falha ao excluir entrada tente novamnte!`);
    }
},
}

module.exports = entradasControllers;