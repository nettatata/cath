'use strict';

angular.module('cath')
.controller('introSliderController', ['$rootScope', '$scope', 'myService', function ($rootScope, $scope, myService) {
  $scope.dataReady = false;
  $scope.calcHeight = 620;
  $scope.calcWidth = $(window).width();
  
  myService.fetchData($scope.catalog).then(function (ret) {
    // TODO: mockData
    ret = [
      {
        image: '/assets/images/marketing/1-1.jpg',
        header: 'EQUAL . JUSTIC . UNDER . LAW',
        content: 'We have served clients of all range, from individuals to big organization. We provide personal solutions based on one\'s situation. Contact us for more information.',
      },
      {
        image: '/assets/images/marketing/1-2.jpg',
        header: 'WE OFFER OUR CLIENTS ONLY',
        content: 'We have served clients of all range, from individuals to big organization. We provide personal solutions based on one\'s situation. Contact us for more information.',
      },
      {
        image: '/assets/images/marketing/1-1.jpg',
        header: 'EQUAL . JUSTIC . UNDER . LAW',
        content: 'We have served clients of all range, from individuals to big organization. We provide personal solutions based on one\'s situation. Contact us for more information.',
      },
      {
        image: '/assets/images/marketing/1-2.jpg',
        header: 'WE OFFER OUR CLIENTS ONLY',
        content: 'We have served clients of all range, from individuals to big organization. We provide personal solutions based on one\'s situation. Contact us for more information.',
      },
    ];
    $scope.dataReady = true;
    $scope.list = ret;
    $scope.$applyAsync();
  });
  $(window).resize(function () {
    $scope.calcHeight = $(window).width() / 2;
    $scope.calcWidth = $(window).width();
    $scope.$applyAsync();
  });
}]);
