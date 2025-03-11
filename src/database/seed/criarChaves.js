const mongoose = require('mongoose');
const Chaves  = require('../../models/Chaves');

async function seed() {
  await mongoose.connect('mongodb+srv://admin:admin123@cluster0.zxgz5wi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  await Chaves.create([
    { nome: 'STAM', codigo: 'A0001', quantidade: 10 },
    { nome: 'PADO', codigo: 'A0002', quantidade: 15 },
    { nome: 'YALE', codigo: 'A0003', quantidade: 20 },
    { nome: 'PAPAIZ', codigo: 'A0004', quantidade: 25 },
    { nome: 'HAGA', codigo: 'A0005', quantidade: 30 },
    { nome: '3F', codigo: 'A0006', quantidade: 35 },
    { nome: 'PRIME', codigo: 'A0007', quantidade: 40 },
    { nome: 'GLORY', codigo: 'A0008', quantidade: 45 },
    { nome: 'VONDER', codigo: 'A0009', quantidade: 50 },
    { nome: 'LUATEK', codigo: 'A0010', quantidade: 55 },
    // ----------------------------------------------
    { nome: 'STAM', codigo: 'A0011', quantidade: 10 },
    { nome: 'PADO', codigo: 'A00012', quantidade: 15 },
    { nome: 'YALE', codigo: 'A0013', quantidade: 20 },
    { nome: 'PAPAIZ', codigo: 'A0014', quantidade: 25 },
    { nome: 'HAGA', codigo: 'A0015', quantidade: 30 },
    { nome: '3F', codigo: 'A0016', quantidade: 35 },
    { nome: 'PRIME', codigo: 'A0017', quantidade: 40 },
    { nome: 'GLORY', codigo: 'A0018', quantidade: 45 },
    { nome: 'VONDER', codigo: 'A0019', quantidade: 50 },
    { nome: 'LUATEK', codigo: 'A0020', quantidade: 55 },
    // ----------------------------------------------
    { nome: 'STAM', codigo: 'A0021', quantidade: 10 },
    { nome: 'PADO', codigo: 'A0022', quantidade: 15 },
    { nome: 'YALE', codigo: 'A0023', quantidade: 20 },
    { nome: 'PAPAIZ', codigo: 'A0024', quantidade: 25 },
    { nome: 'HAGA', codigo: 'A0025', quantidade: 30 },
    { nome: '3F', codigo: 'A0026', quantidade: 35 },
    { nome: 'PRIME', codigo: 'A0027', quantidade: 40 },
    { nome: 'GLORY', codigo: 'A0028', quantidade: 45 },
    { nome: 'VONDER', codigo: 'A0029', quantidade: 50 },
    { nome: 'LUATEK', codigo: 'A0030', quantidade: 55 },
    // ----------------------------------------------
    { nome: 'STAM', codigo: 'A0031', quantidade: 10 },
    { nome: 'PADO', codigo: 'A0032', quantidade: 15 },
    { nome: 'YALE', codigo: 'A0033', quantidade: 20 },
    { nome: 'PAPAIZ', codigo: 'A0034', quantidade: 25 },
    { nome: 'HAGA', codigo: 'A0035', quantidade: 30 },
    { nome: '3F', codigo: 'A0036', quantidade: 35 },
    { nome: 'PRIME', codigo: 'A0037', quantidade: 40 },
    { nome: 'GLORY', codigo: 'A0038', quantidade: 45 },
    { nome: 'VONDER', codigo: 'A0039', quantidade: 50 },
    { nome: 'LUATEK', codigo: 'A0040', quantidade: 55 },
    // ----------------------------------------------
    { nome: 'STAM', codigo: 'A0041', quantidade: 10 },
    { nome: 'PADO', codigo: 'A0042', quantidade: 15 },
    { nome: 'YALE', codigo: 'A0043', quantidade: 20 },
    { nome: 'PAPAIZ', codigo: 'A0044', quantidade: 25 },
    { nome: 'HAGA', codigo: 'A0045', quantidade: 30 },
    { nome: '3F', codigo: 'A0046', quantidade: 35 },
    { nome: 'PRIME', codigo: 'A0047', quantidade: 40 },
    { nome: 'GLORY', codigo: 'A0048', quantidade: 45 },
    { nome: 'VONDER', codigo: 'A0049', quantidade: 50 },
    { nome: 'LUATEK', codigo: 'A0050', quantidade: 55 },
    // ----------------------------------------------
    { nome: 'STAM', codigo: 'A0051', quantidade: 10 },
    { nome: 'PADO', codigo: 'A0052', quantidade: 15 },
    { nome: 'YALE', codigo: 'A0053', quantidade: 20 },
    { nome: 'PAPAIZ', codigo: 'A0054', quantidade: 25 },
    { nome: 'HAGA', codigo: 'A0055', quantidade: 30 },
    { nome: '3F', codigo: 'A0056', quantidade: 35 },
    { nome: 'PRIME', codigo: 'A0057', quantidade: 40 },
    { nome: 'GLORY', codigo: 'A0058', quantidade: 45 },
    { nome: 'VONDER', codigo: 'A0059', quantidade: 50 },
    { nome: 'LUATEK', codigo: 'A0060', quantidade: 55 },
    // ----------------------------------------------
    { nome: 'STAM', codigo: 'A0061', quantidade: 10 },
    { nome: 'PADO', codigo: 'A0062', quantidade: 15 },
    { nome: 'YALE', codigo: 'A0063', quantidade: 20 },
    { nome: 'PAPAIZ', codigo: 'A0064', quantidade: 25 },
    { nome: 'HAGA', codigo: 'A0065', quantidade: 30 },
    { nome: '3F', codigo: 'A0066', quantidade: 35 },
    { nome: 'PRIME', codigo: 'A0067', quantidade: 40 },
    { nome: 'GLORY', codigo: 'A0068', quantidade: 45 },
    { nome: 'VONDER', codigo: 'A0069', quantidade: 50 },
    { nome: 'LUATEK', codigo: 'A0070', quantidade: 55 },
    // ----------------------------------------------
    { nome: 'STAM', codigo: 'A0071', quantidade: 10 },
    { nome: 'PADO', codigo: 'A0072', quantidade: 15 },
    { nome: 'YALE', codigo: 'A0073', quantidade: 20 },
    { nome: 'PAPAIZ', codigo: 'A0074', quantidade: 25 },
    { nome: 'HAGA', codigo: 'A0075', quantidade: 30 },
    { nome: '3F', codigo: 'A0076', quantidade: 35 },
    { nome: 'PRIME', codigo: 'A0077', quantidade: 40 },
    { nome: 'GLORY', codigo: 'A0078', quantidade: 45 },
    { nome: 'VONDER', codigo: 'A0079', quantidade: 50 },
    { nome: 'LUATEK', codigo: 'A0080', quantidade: 55 },
    // ----------------------------------------------
    { nome: 'STAM', codigo: 'A0081', quantidade: 10 },
    { nome: 'PADO', codigo: 'A0082', quantidade: 15 },
    { nome: 'YALE', codigo: 'A0083', quantidade: 20 },
    { nome: 'PAPAIZ', codigo: 'A0084', quantidade: 25 },
    { nome: 'HAGA', codigo: 'A0085', quantidade: 30 },
    { nome: '3F', codigo: 'A0086', quantidade: 35 },
    { nome: 'PRIME', codigo: 'A0087', quantidade: 40 },
    { nome: 'GLORY', codigo: 'A0088', quantidade: 45 },
    { nome: 'VONDER', codigo: 'A0089', quantidade: 50 },
    { nome: 'LUATEK', codigo: 'A0090', quantidade: 55 },
    // ----------------------------------------------
    { nome: 'STAM', codigo: 'A0091', quantidade: 10 },
    { nome: 'PADO', codigo: 'A0092', quantidade: 15 },
    { nome: 'YALE', codigo: 'A0093', quantidade: 20 },
    { nome: 'PAPAIZ', codigo: 'A0094', quantidade: 25 },
    { nome: 'HAGA', codigo: 'A0095', quantidade: 30 },
    { nome: '3F', codigo: 'A0096', quantidade: 35 },
    { nome: 'PRIME', codigo: 'A0097', quantidade: 40 },
    { nome: 'GLORY', codigo: 'A0098', quantidade: 45 },
    { nome: 'VONDER', codigo: 'A0099', quantidade: 50 },
    { nome: 'LUATEK', codigo: 'A0100', quantidade: 55 },
    // ----------------------------------------------
  ]);

  console.log('Dados criados com sucesso!');
  process.exit();
}

seed().catch( error => {
  console.log(`Erro ao criar dados! ${error.message}`);
  process.exit(1);
});