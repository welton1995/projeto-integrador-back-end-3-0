const User = require('../models/User');
const bcrypt = require('bcrypt');

const usersControllers = {
  async listar(req, res) {
    try {
      const users = await User.find({ email: { $ne: "" } });

      res.status(200).json({ users });
    } catch (error) {
      console.log(error);
    }
  },

  async criar(req, res) {
    try {
      const { nome, email, senha, tipo }= req.body;

      const usuarioExist = await User.findOne({ email });

      if(usuarioExist){
        return res.status(409).json('Usuário já cadastrado!');
      }

      const salt = 12;
      const cripto = await bcrypt.hash(senha, salt);


      const novoUsuario = await User.create({
        nome, email, senha: cripto, tipo
      });

      res.status(201).json('Usuário cadastrado com sucesso!');
    } catch (error) {
      console.log(error);
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;
      const { nome, senha, tipo } = req.body;

      const usuarioExist = await User.findById(id);

      if(!usuarioExist){
       return res.status(400).json(`Usuário não encontrado!`);
      }

      const salt = 12;
      const cripto = await bcrypt.hash(senha, salt);
      
      const usuario = await User.findByIdAndUpdate(id, { nome, senha: cripto, tipo },
        { new: true } // Opção para retornar o documento atualizado
      )

      res.status(200).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(400).json("Falha ao atualizar usuário!");
    }
  },

  async remover(req, res,) {
    try {
       const { id } = req.params;
       const usuarioExist = await User.findById(id);

       if(!usuarioExist){
        return res.status(404).json(`Usuário não encontrado!`);
       }

       await User.findByIdAndDelete(id);

       return res.status(200).json(`Usuário excluido com sucesso!`);
    } catch (error) {
        console.log(error);
        res.status(500).json(`Falha ao excluir usuario tente novamnte!`);
    }
},
}

module.exports = usersControllers;