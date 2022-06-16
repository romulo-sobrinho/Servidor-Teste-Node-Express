const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use("/meuservidor", express.static(path.join(__dirname, 'client')));

app.listen(PORT, ()=>{
  console.log(`Servidor rodando com sucesso na porta: ${PORT}`);
})