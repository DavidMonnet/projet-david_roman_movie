angular
  .module('app')
  .component('favourites', {
    templateUrl: 'app/component/favourites.html',
    controller: function (Persistence) {
      var $ctrl = this;
      $ctrl.maListe = Persistence.importSaved();
    }
  });
