const express = require('express');
const router = express.Router();

let teachers = [
  {id: 0, name: "Maria Célia", turma: "6º"},
  {id: 1, name: "Fernanda Lima", turma: "7º"},
  {id: 2, name: "João Paulo", turma: "8º"},
  {id: 3, name: "Ingrid Luna", turma: "9º"}
];

router.get('/', (req, res, next) => {
  let teacher = teachers[req.body.id];
  if (teacher) {
    res.json(teacher);
  } else {
    next();
  }
});

router.get('/:id', (req, res) => {
  let teacher = teachers[req.params.id];
  if (teacher) {
    res.json(teacher);
  } else {
    res.send("<h1>Professor não encontrado, digite outro número ID</h1");
  }
});

router.get('/', (req, res) => {
  let teacher = teachers[req.query.id];
  if (teacher) {
    res.json(teacher);
  } else {
    res.send("<h1>Professor não encontrado, digite outro número ID</h1");
  }
});

module.exports = router;