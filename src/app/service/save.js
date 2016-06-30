angular
  .module('app')
  .service('Persistence', function () {
    var Persistence = this;
    Persistence.save = function (toBeSaved) {
      localStorage.setItem('mon_espace_de_stockage', JSON.stringify(toBeSaved));
    };

    Persistence.importSaved = function () {
      return JSON.parse(localStorage.getItem('mon_espace_de_stockage'));
    };

    Persistence.supprimerdeListe = function (maListe, el) {
      maListe.splice(maListe.indexOf(el), 1);
      Persistence.save(maListe);
    };

    Persistence.ajouterAListe = function (maListe, el) {
      maListe.push(el);
      Persistence.save(maListe);
    };
  });

