const Chaves = require('../models/Chaves');
const Saidas = require('../models/Saidas');

const saidasControllers = {
  async listar(req, res){
    try {
      const saidas = await Saidas.find().populate('chaves');

      res.status(200).json(saidas);
    } catch (error) {
      return console.log(error);
    }
  },

  async criar(req, res) {
    try {
      const { id } = req.params;
      const { quantidade} = req.body;
      const chaves = await Chaves.findById(id);

      if(!id){
        return res.status(400).json(`Chave não encontrada!`);
      }

      if(quantidade > chaves.quantidade){
        return res.status(400).json('Saldo insuficiente!');
      }

      const chave = await Chaves.findByIdAndUpdate(
        id,
        { $inc: { quantidade: -quantidade } }, // retira a quantidade especificada
        { new: true } // retornar o 
    );

    if (!chave) {
        return res.status(404).send('Chave não encontrada.');
    }

      const saida = await Saidas.create({
        chaves: id, quantidade
      });

      res.status(201).json('Saída realizada com sucesso!');     
    } catch (error) {
      return console.log(error);
    }
  },

  async remover(req, res) {
    try {
       const { id } = req.params;
       const entradaExiste = await Saidas.findById(id);

       if(!entradaExiste){
        return res.status(200).json(`Saída não encontrada!`);
       }

       await Saidas.findByIdAndDelete(id);

       return res.status(200).json(`Saída excluida com sucesso!`);
    } catch (error) {
        console.log(error);
        res.status(400).json(`Falha ao excluir saída tente novamnte!`);
    }
},
};

module.exports = saidasControllers;