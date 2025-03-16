const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginControllers = {
  async login(req, res) {
    const { email, senha } = req.body;

    try {

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'Usuário ou senha incorretos!' });
      }

      const confere = await bcrypt.compare(senha, user.senha);

      if (!confere) {
        return res.status(401).json({ msg: 'Usuário ou senha incorretos!' });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '3h' });

      res.json({ 
        token, 
        user: {
          id: user._id, 
          name: user.name, 
          email: user.email 
        } 
      });

    } catch (error) {
      console.log(error);
      console.error('Erro no login:', error.message); 
      res.status(500).json({ msg: 'Erro interno do servidor!' });
    }
  }
};

module.exports = loginControllers;
