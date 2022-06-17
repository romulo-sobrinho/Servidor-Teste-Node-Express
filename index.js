const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

app.use("/meuservidor", express.static(path.join(__dirname, 'client')));

app.get("/", (req, res)=>{
  res.send("<h1>Servidor acessado via método GET</h1>");
})

app.post("/", (req, res)=>{
  res.send("<h1>Servidor acessado via método POST</h1>");
})

app.put("/", (req, res)=>{
  res.send("<h1>Servidor acessado via método PUT</h1>");
})

app.delete("/", (req, res)=>{
  res.send("<h1>Servidor acessado via método DELETE</h1>");
})

app.listen(PORT, ()=>{
  console.log(`Servidor rodando com sucesso na porta: ${PORT}`);
})