describe('movie component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('movie', function () {
      return {
        templateUrl: 'app/movie.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<movie></movie>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
