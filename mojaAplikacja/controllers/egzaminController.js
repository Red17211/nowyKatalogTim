exports.showEgzaminListaEgzaminow = (reg, res, next) => {
    res.render('pagesLotnictwo/Egzamin/listaEgzaminow', {navLocation:'exam'});
}
exports.showEgzaminDodajEgzamin = (reg, res, next) => {
    res.render('pagesLotnictwo/Egzamin/dodajEgzamin', {navLocation:'exam'});
}
exports.showExamDetails = (reg, res, next) => {
    res.render('pagesLotnictwo/Egzamin/szczegolyEgzaminu', {navLocation:'exam'});
}
exports.showAddedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Egzamin/added', {navLocation:'exam'});
}
exports.showDeletedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Egzamin/deleted', {navLocation:'exam'});
}
exports.showEditedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Egzamin/edited', {navLocation:'exam'});
}
exports.showEditPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Egzamin/edycjaEgzaminu', {navLocation:'exam'});
}
exports.showConfirmPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Egzamin/PytaniePotwierdzenieUsuniecia', {navLocation:'exam'});
}