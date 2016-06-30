angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      template: '<app></app>'
    })
    .state('app.list', {
      url: '/',
      template: '<list></list>'
    })
    .state('app.movie', {
      url: '/movie/:movieId',
      template: '<movie></movie>'
    })
    .state('app.poster', {
      url: '/poster',
      template: '<poster></poster>'
    })
    .state('app.favourites', {
      url: '/favourites',
      template: '<favourites></favourites>'
    })
    .state('app.about', {
      url: '/about',
      template: '<about></about>'
    });
}

