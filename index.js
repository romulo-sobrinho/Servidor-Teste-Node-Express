const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

let score = 1;

let consoleMethod = (req, res, next)=>{
  
  console.log(`O método utilizado foi: ${req.method} - chamada de nº: ${score}`);
  score += 1;
  next();
}

let answer = (req, res)=>{
  res.send("<h1>Servidor acessado via método GET</h1>");
}

app.use("/meuservidor", express.static(path.join(__dirname, 'client')));

app.get("/", consoleMethod, answer);

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