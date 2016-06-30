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
      $ctrl.maListe = [];
      $ctrl.ajouterAListe = function (el) {
        Persistence.ajouterAListe($ctrl.maListe, el);
      };
    }
  });
