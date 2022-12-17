exports.showListaPytanieEgzamin = (reg, res, next) => {
res.render('pagesLotnictwo/Pytanie_egzamin/pytanieEgzamin', {navLocation:'anExam'});
}

exports.showPytanieRozpEgzamin = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/egzamin', {navLocation:'anExam'});
}
exports.showExamDetails = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/szczegolyUdzielnonychOdpowiedzi', {navLocation:'anExam'});
}
exports.showEditPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/edytujUdzieloneOdpowiedzi', {navLocation:'anExam'});
}
exports.showAddedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/KomunikatZakonczeniaEgzaminu', {navLocation:'anExam'});
}
exports.showEditedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/edited', {navLocation:'anExam'});
}
exports.showDeletedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/deleted', {navLocation:'anExam'});
}
exports.showConfirmPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie_egzamin/PytPotUsunPytEgzamin', {navLocation:'anExam'});
}
