function Save() {
  var Save = this;
  Save.save = function (toBeSaved) {
    localStorage.setItem('mon_espace_de_stockage', JSON.stringify(toBeSaved));
  };

  Save.importSaved = function () {
    return JSON.parse(localStorage.getItem('mon_espace_de_stockage'));
  };
}

angular
  .module('app')
  .service('Save', Save);

