const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

function gerarNovaSenha(tamanho = 6) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  let senha = '';
  for (let i = 0; i < tamanho; i++) {
      senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return senha;
}


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
          email: user.email,
          tipo: user.tipo
        } 
      });

    } catch (error) {
      console.log(error);
      console.error('Erro no login:', error.message); 
      res.status(500).json({ msg: 'Erro interno do servidor!' });
    }
  },

  async recuperar(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ email });

    const novaSenha = gerarNovaSenha(6);

    const cripto = await bcrypt.hash(novaSenha, 10);

    user.senha = cripto;
    await user.save();

    if(!user){
      return res.status(404).json('E-mail não encontrado!');
    }

    if(!email) {
      return res.status(400).json('E-mail é obrigatório!');
    }

    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      secure: false,
      auth: {
        user: "welton.araujo2014@gmail.com",
        pass: "vcdjughgsiefendv",
      },
    });

    let options = {
      from: "welton.araujo2014@gmail.com",
      to: email,
      subject: "Nova senha",
      html: `
      <h1>Recuperação de Senha 🔑</h1>
      <h3>Olá, ${user.nome}</h3>
      <h3>Sua nova senha é: <strong>${novaSenha}</strong>🔐</h3><br><br><br><br><br>
      <p>Se você não solicitou essa alteração, ignore este e-mail.</p>
    `
    }

    const sendEmail = async () => {
      try {
        console.log('Enviando e-mail');
        await transporter.sendMail(options);
        console.log('E-mail enviado!');
        
        res.status(200).json("email enviado");
      } catch (error) {
        console.log(error);
      }
    }
    
    sendEmail();
  }
};

module.exports = loginControllers;
