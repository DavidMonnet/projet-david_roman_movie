angular
  .module('app')
  .component('list', {
    templateUrl: 'app/component/list.html',
    controller: function (Save, $http) {
      var $ctrl = this;
      $http.get('https://amc.ig.he-arc.ch/tmdb/movie/popular?language=fr')
      .then(function (result) {
        $ctrl.movies = result.data.results;
      });

      $ctrl.maListe = [];
      $ctrl.maListe = Save.importSaved();
      $ctrl.maVariable = 'Film à voir';
      $ctrl.ajouterAListe = function () {
        $ctrl.maListe.push($ctrl.maVariable);
        Save.save($ctrl.maListe);
      };
      $ctrl.supprimerdeListe = function (el) {
        $ctrl.maListe.splice($ctrl.maListe.indexOf(el), 1);
        Save.save($ctrl.maListe);
      };
    }
  });
