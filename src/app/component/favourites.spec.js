describe('favourites component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('favourites', function () {
      return {
        templateUrl: 'app/favourites.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<favourites></favourites>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
