const PersonRepository = require('../repository/sequelize/PersonRepository');

exports.login = (req, res, next) => {
    const pesel = req.body.pesel;
    const password = req.body.password;
    const authUtil = require ('../util/authUtils');
    PersonRepository.findByPesel(pesel)
        .then(person =>{

            //Jesli w ogole nie znalazlem w bazie osoby o podanym peselu
            if(!person) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy pesel lub hasło"
                });
            }
            //Jesli znalazlem w bazie i pasuje haslo
            else if (authUtil.comparePasswords(password, person.password)===true) {
                req.session.loggedUser = person;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowy pesel lub hasło (znalazl ale zle haslo)"
                });
            }
        })
        .catch (err =>{
            console.log(err);
        });

}

exports.logout = (req, res, next) =>{
    req.session.loggedUser = undefined;
    res.redirect('/');
}

