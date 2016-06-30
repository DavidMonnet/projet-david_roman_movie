angular
  .module('app')
  .component('list', {
    templateUrl: 'app/component/list.html',
    controller: function (Persistence, $http) {
      var $ctrl = this;
      $http.get('https://amc.ig.he-arc.ch/tmdb/movie/popular?language=fr')
        .then(function (result) {
          $ctrl.movies = result.data.results;
        });
      $ctrl.maListe = Persistence.importSaved();
      $ctrl.ajouterAListe = function (el) {
        $ctrl.maListe.push(el);
        Persistence.save($ctrl.maListe);
      };
      $ctrl.movieDansListe = function (testMovie) {
        for (var i = 0, l = $ctrl.maListe.length; i < l; ++i) {
          if ($ctrl.maListe[i].id === testMovie) {
            return true;
          }
        }
        return false;
      };
    }
  });
