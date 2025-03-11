const Servicos = require('../models/Servicos');

const servicosControllers = {
  async listar(req, res){
    try {
      const servicos = await Servicos.find();

      res.status(200).json({ servicos });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: 'Falha ao listar servicos!' });
      return;
    }
  },

  async criar(req, res) {
    try {
      const { tipo, preco, custo, quantidade, data, observacao } = req.body;
      const servico = await Servicos.create({ tipo, preco, custo, quantidade, data, observacao });

      res.status(201).json({ message: 'Servico criado com sucesso!', servico });

    } catch (error) {
      console.log(error);
      res.status(404).json({ message: 'Falha ao criar servico!' });
      return;
    }
  },

  async editar(req, res) {
    try {
      const { id } = req.params;
      const servicoExiste = await Servicos.findById(id);

      if(!servicoExiste) {
        res.status(404).json({ message: 'Servico não encontrado!' });
        return;
      }

      await Servicos.findByIdAndUpdate(id, req.body);

      res.status(200).json({ message: 'Servico editado com sucesso!'});

    } catch (error) {
      console.log(error);
      return console.log('Falha ao editar servico');
    }
  },

  async remover(req, res) {
    try {
      const { id } = req.params;
      await Servicos.findByIdAndDelete(id);

      res.status(200).json({ message: 'Servico removido com sucesso!' });
      
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: 'Falha ao remover servico!' });
      return;
    }
  },

  async buscarTipo(req, res) {
    try {
      const { tipo } = req.body;

      const servicos = await Servicos.find({ tipo });
      
      if(servicos.length === 0){
        return res.status(404).json({ message: 'Nenhum serviço ou venda encontrado!' });
      }
      res.status(200).json({ servicos });
    } catch (error) {
      console.log(error);
      res.status(404).json({ message: 'Falha ao buscar tipo de servico!' });
    }
  },

  async buscarPorPeriodo(req, res) {
    try {
      const { dataInicio, dataFim } = req.body; // Assume que as datas são enviadas no corpo da requisição
  
      // Certifique-se de que as datas sejam válidas
      if (!dataInicio || !dataFim) {
        return res.status(400).json({ message: 'As datas de início e fim são obrigatórias.' });
      }
  
      // Converte as datas para objetos Date
      const inicio = new Date(dataInicio);
      const fim = new Date(dataFim);
  
      // Faz a busca no banco de dados considerando o intervalo de datas
      const servicos = await Servicos.find({
        data: {
          $gte: inicio, // Maior ou igual a data de início
          $lte: fim     // Menor ou igual a data de fim
        }
      });
  
      if (servicos.length === 0) {
        return res.status(404).json({ message: 'Nenhum serviço ou venda encontrado para o período especificado!' });
      }
      res.status(200).json({ servicos });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Falha ao buscar serviços no período especificado!' });
    }
  },
  async buscarServicosPorTipoEPeriodo(req, res) {
    try {
      const { tipo, dataInicio, dataFim } = req.body;
  
      // Verifica se o tipo e as datas são válidos
      if (!tipo || !dataInicio || !dataFim) {
        return res.status(400).json({ message: 'Tipo, data de início e data de fim são obrigatórios.' });
      }
  
      // Converte as datas para objetos Date
      const inicio = new Date(dataInicio);
      const fim = new Date(dataFim);
  
      // Faz a busca no banco de dados considerando o tipo e o intervalo de datas
      const servicos = await Servicos.find({
        tipo: tipo,
        data: {
          $gte: inicio, // Maior ou igual a data de início
          $lte: fim     // Menor ou igual a data de fim
        }
      });
  
      if (servicos.length === 0) {
        return res.status(404).json({ message: 'Nenhum serviço ou venda encontrado para o tipo e período especificados!' });
      }
      
      res.status(200).json({ servicos });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Falha ao buscar serviços pelo tipo e período especificados!' });
    }
  }
  
  
}

module.exports = servicosControllers;
