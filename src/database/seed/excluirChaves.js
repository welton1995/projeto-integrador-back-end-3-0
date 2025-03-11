const mongoose = require('mongoose');
const Chaves  = require('../../models/Chaves');

async function seed() {
  await mongoose.connect('mongodb+srv://admin:admin123@cluster0.zxgz5wi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  await Chaves.deleteMany({ codigo: { 
    $gte: 'A0001',
    $lte: 'A0100'
   } });

  console.log('Dados removidos com sucesso!');
  process.exit();
}

seed().catch( error => {
  console.log(`Erro ao criar dados! ${error}`);
  process.exit(1);
});