var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session') //importando o express session

var indexRouter = require('./routes/index');
var usuariosRouter = require('./routes/usuariosRouter');

var livrosRouter = require('./routes/livrosRouter')
var autoresRouter = require('./routes/autoresRouter')
var generosRouter = require('./routes/generosRouter')
var idiomasRouter = require('./routes/idiomasRouter')
var enderecosRouter = require('./routes/enderecosRouter')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'viraPagina',
  saveUninitialized: true,
  resave: true
}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);

app.use('/livros', livrosRouter)
app.use('/autores', autoresRouter)
app.use('/generos', generosRouter)
app.use('/idiomas', idiomasRouter)
app.use('/enderecos', enderecosRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
