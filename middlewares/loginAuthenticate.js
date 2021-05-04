module.exports = async (req, res, next) => {
    if(req.session.usuarioLogado != null){
        next()
    }else {
        res.redirect('/usuarios/login')
    }
   
}