describe('poster component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('poster', function () {
      return {
        templateUrl: 'app/poster.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<poster></poster>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
