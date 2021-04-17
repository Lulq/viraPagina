// Módulo virapagina
const nomeSite = "ViraPágina"
var moment = require("moment");
let fs = require('fs');
const { min } = require("moment"); // ver se precisa mesmo


let db = fs.readFileSync('./db.json'); // Lê um json.
db = JSON.parse(db); // Converse o json em objeto JS


const viraPagina = {
    //função para retornar a data e hora
    dataAgora : () => {
        let data = moment().format("L - LTS")
        return data
    },

    //função que atualiza ambos os bancos de dados
    atualizarBanco : () => {
        //conversão do objeto JS para JSON
        let atualizacao = JSON.stringify(db, null, 2);
        // atualização do arquivo JSON do banco de dados
        fs.writeFileSync('db.json', atualizacao, 'utf-8')
    },

    adicionarUsuario : (novoUsuario) => {
        db.users.push(novoUsuario);
        viraPagina.atualizarBanco();
    },

    adicionarLivro : (novoLivro) => {
        db.livros.push(novoLivro);
        viraPagina.atualizarBanco();
    },

    listarLivros : () => {
        //lista todos os livros cadastrados
        let textoListaLivros = "Estes são os livros cadastrados:\n\n"
        db.livros.forEach(livro => {
            let {titulo, autor, edicao, genero, editora} = livro;
            textoListaLivros += (`Livro: ${titulo}, \nAutor: ${autor}, \n${edicao}ª edição, \nGênero: ${genero}, \neditora: ${editora}\n\n`)
        })
        return textoListaLivros;
    },

    listarUsuarios : () => {
        //lista todos os usuários cadastrados.
        let textoListaUsuarios = "Aqui estão os usuários cadastrados no portal:\n\n"
        db.users.forEach(user => {
            let {nome, cidade, estado, genero_favorito } = user;
            textoListaUsuarios += (`${nome},\n${cidade}-${estado},\nGosta de ${genero_favorito}.\n\n`)
        })
        return textoListaUsuarios;
    },

    filtrarGenero : genLivro => {
        let filtrados = db.livros.filter(livro => livro.genero === genLivro);
        console.log(`Aqui estão todos os livros do gênero ${genLivro}:`);
        filtrados.forEach(filtrado => {
            console.log(filtrado.titulo);
        });
    }
}

module.exports = viraPagina;