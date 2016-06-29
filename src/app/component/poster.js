angular
  .module('app')
  .component('poster', {
    templateUrl: 'app/component/poster.html',
    controller: function posterController() {
    },
    bindings: {
      movie: '<'
    }
  });

