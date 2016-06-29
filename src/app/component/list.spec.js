describe('list component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('list', function () {
      return {
        templateUrl: 'app/list.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<list></list>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
