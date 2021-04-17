const {response} = require('express');
const express = require('express');
const { listarLivros } = require('./viraPagina.js');
const app = express();
const viraPagina = require('./viraPagina.js')

app.use(express.json())

// Rota para listar os livros
app.get('/livros', (req, res) => {
    return res.send(viraPagina.listarLivros());
});

// Rota para adicionar livros
app.post('/livros', (req, res) => {
    const livro = req.body
    return res.json(viraPagina.adicionarLivro(livro))
});

// Rota para listar os usuários
app.get('/users', (req, res) =>{
    return res.send(viraPagina.listarUsuarios());
});

// Rota para adicionar os usuários
app.post('/users', (req,res) =>{
    const user = req.body
    return res.json(viraPagina.adicionarUsuario(user));

})

app.listen(8080, () => {
    console.log('Servidor Rodando!');
});