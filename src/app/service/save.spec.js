describe('Save service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Save) {
    expect(Save.getData()).toEqual(3);
  }));
});
