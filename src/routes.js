const express = require('express');
const chavesControllers = require('./controllers/chavesControllers');
const saidasControllers = require('./controllers/saidasControllers');
const entradasControllers = require('./controllers/entradasControllers');
const servicosControllers = require('./controllers/servicosControllers');
const usersControllers = require('./controllers/usersControllers');
const loginControllers = require('./controllers/loginControllers');

const routes = express.Router();

// Chaves
routes.get('/', chavesControllers.listar);
routes.post('/', chavesControllers.criar);
routes.put('/:id', chavesControllers.atualizar);
routes.delete('/:id', chavesControllers.remover);
routes.put('/retirar/:id', chavesControllers.retirar);
routes.put('/adicionar/:id', chavesControllers.adicionar);
routes.get('/busca/:codigo', chavesControllers.buscaCodigo);

// Usuarios rotas
routes.get('/usuarios', usersControllers.listar);
routes.post('/usuarios', usersControllers.criar);
routes.put('/usuarios/:id', usersControllers.atualizar);
routes.delete('/usuarios/:id', usersControllers.remover);

// Saídas Rotas
routes.get('/saidas', saidasControllers.listar);
routes.post('/saidas/:id', saidasControllers.criar);
routes.delete('/saidas/:id', saidasControllers.remover);

// Entradas Rotas
routes.get('/entradas', entradasControllers.listar);
routes.post('/entradas/:id', entradasControllers.criar);
routes.delete('/entradas/:id', entradasControllers.remover);

// Servicos Rotas
routes.get('/servicos', servicosControllers.listar);
routes.post('/servicos', servicosControllers.criar);
routes.put('/servicos/:id', servicosControllers.editar);
routes.delete('/servicos/:id', servicosControllers.remover);
routes.post('/servicos/busca', servicosControllers.buscarTipo);
routes.post('/servicos/busca-periodo', servicosControllers.buscarServicosPorTipoEPeriodo);

// Login Rotas
routes.post('/login', loginControllers.login);
routes.post('/login/recuperar', loginControllers.recuperar);

module.exports = routes;