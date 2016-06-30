angular
  .module('app')
  .component('favourites', {
    templateUrl: 'app/component/favourites.html',
    controller: function (Persistence) {
      var $ctrl = this;
      $ctrl.maListe = Persistence.importSaved();
      $ctrl.supprimerdeListe = function (el) {
        $ctrl.maListe.splice($ctrl.maListe.indexOf(el), 1);
        Persistence.save($ctrl.maListe);
      };
    }
  });
