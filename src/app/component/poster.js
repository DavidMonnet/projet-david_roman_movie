function posterController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('poster', {
    templateUrl: 'app/component/poster.html',
    controller: posterController
  });

