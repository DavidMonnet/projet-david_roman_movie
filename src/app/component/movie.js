function movieController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('movie', {
    templateUrl: 'app/component/movie.html',
    controller: movieController
  });

