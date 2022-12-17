exports.showOsobaList = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/listaOsobEgzaminowanych', {navLocation:'person'});
}
exports.showDodajOsobe = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/dodajOsobe', {navLocation:'person'});
}
exports.showPersonDetails = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/szczegółyOsoby', {navLocation:'person'});
}
exports.showAddedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/added', {navLocation:'person'});
}
exports.showDeletedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/deleted', {navLocation:'person'});
}
exports.showEditedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/edited', {navLocation:'person'});
}
exports.showEditPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/edycjaOsobe', {navLocation:'person'});
}
exports.showConfirmPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Osoba/PytaniePotwierdzUsunOsoby', {navLocation:'person'});
}