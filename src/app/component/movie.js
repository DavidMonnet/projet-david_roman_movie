angular
  .module('app')
  .component('movie', {
    templateUrl: 'app/component/movie.html',
    controller: function movieController($stateParams, $http) {
      var $ctrl = this;
      $http.get('https://amc.ig.he-arc.ch/tmdb/movie/' + $stateParams.movieId + '?language=fr')
      .then(function (result) {
        $ctrl.movie = result.data;
      });
    }
  });
