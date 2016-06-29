function listController() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('list', {
    templateUrl: 'app/component/list.html',
    controller: listController
  });

