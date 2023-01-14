var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var indexRouter = require('./routes/index');
const EgzaminRouter = require('./routes/EgzaminRoute'); //zaimportujemy nasz nowy router
const pytanieEgzaminRouter = require('./routes/pytanieEgzaminRoute');
const PytanieRouter = require('./routes/pytanieRoute');
const usersRouter = require('./routes/OsobaRoute');


var app = express();

//linking date formatting function
const fmt = require('./public/js/dateFormatting');
app.use((req, res, next) => {
    res.locals.fmt = fmt;
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/Egzamin', EgzaminRouter); //podłączymy go pod ścieżką
app.use('/Pytanie_egzamin', pytanieEgzaminRouter);
app.use('/Pytanie', PytanieRouter);
app.use('/Osoba', usersRouter);

const personApiRouter = require('./routes/api/PersonApiRoute');
const questionApiRouter = require('./routes/api/QuestionApiRoute');
const examApiRouter = require('./routes/api/ExamApiRoute');
const questionExamApiRouter = require('./routes/api/QuestionExamApiRoute');

app.use('/api/persons', personApiRouter);
app.use('/api/questions', questionApiRouter);
app.use('/api/exams', examApiRouter);
app.use('/api/questionExams', questionExamApiRouter);

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

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err => {
        console.log(err);
    });




module.exports = app;
