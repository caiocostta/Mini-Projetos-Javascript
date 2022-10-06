function Postagem(titulo, mensagem, autor, visualizacoes, autorComentario, mensagemComentario, estaAoVivo){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = visualizacoes,
    this.comentarios = [{autorComentario, mensagemComentario}],
    this.estaAoVivo = estaAoVivo
}

let postagem2 = new Postagem('Titulo 2', 'Mensagem 2', 'Autor 2', 500, 'Autor Comentário 2', 'Mensagem Comentário 2', false)

let postagem = {
    titulo: 'Titulo',
    mensagem: 'Mensagem',
    autor: 'Autor',
    visualizacoes: 'Visualizações',
    comentarios: [
        { autor: 'Autor Comentário',mensagem: 'Mensagem Comentário' },
        { autor: 'Autor Comentário',mensagem: 'Mensagem Comentário' }
    ],
    estaAoVivo: true
}

console.log(postagem, postagem2)