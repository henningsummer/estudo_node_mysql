module.exports.formulario_inclusao_noticia = function(app, req, res) {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function(app, req, res) {

    var noticia = req.body;
    //res.send(noticia);
    //console.log(noticia);
    req.assert('titulo', 'Título é obrigatório!').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório!').notEmpty();
    req.assert('resumo', 'Resumo deve ter mais caracteres!').len(10, 100);
    req.assert('autor', 'Autor é obrigatório!').notEmpty();
    req.assert('data_noticia', 'A data é obrigatório!').notEmpty();
    req.assert('noticia', 'Noticia é obrigatório!').notEmpty();

    var erros = req.validationErrors();

    console.log(erros);
    if (erros) {
        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia });
        return;
    }
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function(error, result) {
        res.redirect('/noticias');
    });
}