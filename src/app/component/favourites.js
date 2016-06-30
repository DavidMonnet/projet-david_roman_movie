angular
  .module('app')
  .component('favourites', {
    templateUrl: 'app/component/favourites.html',
    controller: function (Save, $http) {
      var $ctrl = this;

      $ctrl.maListe = [];
      $ctrl.maListe = Save.importSaved();
    }
  });
