'use strict';

angular.module('cath')
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  // TODO: implement routes
  .when('/news/catalog/:catalog?/', {
    controller: 'NewsCatalogController',
    templateUrl: 'views/newsCatalogView.html',
  })
  .when('/news/:articleId?/', {
    controller: 'NewsController',
    templateUrl: 'views/newsView.html',
  })
  .when('/cases/:caseId?', {
    controller: 'NewsController',
    templateUrl: 'views/newsView.html',
  })
  .when('/cases/s/:stage?', {
    controller: 'CasesController',
    templateUrl: 'views/casesView.html',
  })
  .when('/cases/:stage/c/:catalog?', {
    controller: 'NewsController',
    templateUrl: 'views/newsView.html',
  })
  .when('/attorneys/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/faqs/', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/search/:keywords?', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/tags/:tags?', {
    controller: 'MainController',
    templateUrl: 'views/mainView.html',
  })
  .when('/comps', {
    templateUrl: 'views/compsDisplay.html',
  })
  .otherwise({
    redirectTo: '/',
  });

  $locationProvider.html5Mode(true);
});
