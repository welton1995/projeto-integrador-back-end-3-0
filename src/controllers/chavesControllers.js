const Chaves = require('../models/Chaves');
const Saidas = require('../models/Saidas');
const Entradas = require('../models/Entradas');

const chavesControllers = {
  async listar(req, res) {
    try {
      const chaves = await Chaves.find();

      res.status(200).json({ chaves });
    } catch (error) {
      console.log(error);
    }
  },

  async criar(req, res) {
    try {
      const { nome, codigo, quantidade }= req.body;

      const chaveExiste = await Chaves.findOne({ codigo });

      if(chaveExiste){
        return res.status(409).json('Código de chave já cadastrado!');
      }

      const novaChave = await Chaves.create({
        nome, codigo, quantidade
      });

      res.status(201).json('Chave cadastrada com sucesso!');
    } catch (error) {
      console.log(error);
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, quantidade } = req.body;

      const chaveExiste = await Chaves.findById(id);

      if(!chaveExiste){
       return res.status(400).json(`Chave não encontrada!`);
      }
      
      const chave = await Chaves.findByIdAndUpdate(id, { nome, quantidade },
        { new: true } // Opção para retornar o documento atualizado
      )

      res.status(200).json(chave);
    } catch (error) {
      console.error(error);
      res.status(400).json("Falha ao atualizar chave");
    }
  },

  async remover(req, res, next) {
    try {
       const { id } = req.params;
       const chaveExiste = await Chaves.findById(id);

       if(!chaveExiste){
        return res.status(400).json(`Chave não encontrada!`);
       }

       await Entradas.deleteMany({ chaves: id });
       await Saidas.deleteMany({ chaves: id });
       await Chaves.findByIdAndDelete(id);

       return res.status(200).json(`Chave excluida com sucesso!`);
    } catch (error) {
        console.log(error);
        res.status(400).json(`Falha ao excluir chave tente novamnte!`);
    }
},

 async retirar (req, res) {
  const { id } = req.params;
  const { quantidade } = req.body;
  const chave = await Chaves.findById(id);
  if(quantidade > chave.quantidade){
    return res.status(400).json('Saldo insuficiente!');
  }
  try {
      const chave = await Chaves.findByIdAndUpdate(
          id,
          { $inc: { quantidade: -quantidade } }, // retira a quantidade especificada
          { new: true } // Opção para retornar o documento atualizado
      );

      if (!chave) {
          return res.status(404).send('Chave não encontrada.');
      }

      return res.status(200).send(chave);
  } catch (error) {
      return console.error('Erro ao retirar quantidade de chaves:', error);
  }
 },

 async adicionar (req, res) {
  const { id } = req.params;
  const { quantidade } = req.body;

  try {
      const chave = await Chaves.findByIdAndUpdate(
          id,
          { $inc: { quantidade: +quantidade } }, // Adiciona a quantidade especificada
          { new: true } // Opção para retornar o documento atualizado
      );

      if (!chave) {
          return res.status(404).send('Chave não encontrada.');
      }

      return res.status(200).send(chave);
  } catch (error) {
     return console.error('Erro ao retirar quantidade de chaves:', error);
  }
 },

 async buscaCodigo (req, res) {
  try {
    const { codigo } = req.params;
    const chave = await Chaves.findOne({ codigo });

    if(!chave){
      res.status(200).json('Chave não encontrada!');
    }

    res.status(200).json(chave);
  } catch (error) {
    return console.error(error); 
  }
 }

}

module.exports = chavesControllers;