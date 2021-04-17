const nomeSite = "Vira a Página"
var moment = require("moment");
let fs = require('fs');
const { min } = require("moment"); // ver se precisa mesmo


let db = fs.readFileSync('./db.json'); // Lê um json.
db = JSON.parse(db); // Converse o json em objeto JS

//função para retornar a data e hora
const dataAgora = () => {
    let data = moment().format("L - LTS")
    return data
};

//função que atualiza ambos os bancos de dados
const atualizarBanco = () => {
    //conversão do objeto JS para JSON
    let atualizacao = JSON.stringify(db, null, 2);
    // atualização do arquivo JSON do banco de dados
    fs.writeFileSync('db.json', atualizacao, 'utf-8')
};

const adicionarUsuario = (novoUsuario) => {
    db.users.push(novoUsuario);
    atualizarBanco();
};

const adicionarLivro = (novoLivro) => {
    db.livros.push(novoLivro);
    atualizarBanco();
};

const listarLivros = () => {
    //lista todos os livros cadastrados
    console.log("Estes são os livros cadastrados:")
    db.livros.forEach(livro => {
        let {titulo, autor, edicao, genero, editora} = livro;
        console.log(`Livro: ${titulo}, Autor: ${autor}, ${edicao}ª edição, Gênero: ${genero}, editora: ${editora}`)
    })

}
listarLivros()

const filtrarGenero = genLivro => {
    // pra fazer
    let filtrados = db.livros.filter(livro => livro.genero === genLivro);
    console.log(`Aqui estão todos os livros do gênero ${genLivro}:`);
    filtrados.forEach(filtrado => {
        console.log(filtrado.titulo);
    });
}

filtrarGenero("Romance");
// adicionarUsuario({
//     "nome" : "Luiz",
//     "idade": "34",
//     "genero favorito" : "Ficção Científica",
//     "estado" : "Pernambuco",
//     "cidade" : "Timbaúba"     
// });

// adicionarLivro({
//     "nome" : "cem anos de solidão",
//     "autor": "Gabriel García Marquez",
//     "genero" : "Romance",
//     "sub-genero": "Realismo Fantástico",
//     "edição" : 1,
//     "ano" : 1967
    
// });