exports.showListaPytaniePytanie = (reg, res, next) => {
res.render('pagesLotnictwo/Pytanie/listaPytan', {navLocation:'question'});
}

exports.showEgzaminDodajPytanie = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie/dodajPytanie', {navLocation:'question'});
}
exports.showExamDetails = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie/szczegółyPytań', {navLocation:'question'});
}
exports.showEditedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie/editedPytanie', {navLocation:'question'});
}
exports.showAddedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie/addedKom', {navLocation:'question'});
}
exports.showDeletedConfirmation = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie/deletedKom', {navLocation:'question'});
}
exports.showEditPage = (reg, res, next) => {
    res.render('pagesLotnictwo/Pytanie/edytujPytanie', {navLocation:'question'});
}

