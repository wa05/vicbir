'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.view3',
  'myApp.view4',
  'myApp.view5',
  'myApp.version',
  'angularFileUpload',
  'ui.bootstrap'
]).config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl',
        controllerAs: 'main'
      }).
      when('/discografia', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl',
        controllerAs: 'about'
      }).
      when('/videos', {
        templateUrl: 'view3/view3.html',
        controller: 'View3Ctrl',
        controllerAs: 'carga'
      })      .
      when('/fotos', {
        templateUrl: 'view4/view4.html',
        controller: 'View4Ctrl',
        controllerAs: 'fotos'
      })
      .
      when('/contacto', {
        templateUrl: 'view5/view5.html',
        controller: 'View5Ctrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive("navbar",function(){
    return{
      restrict: 'E',
      templateUrl:'/directives/navbar.html'
    };
  })

  .controller('navctrl', ['$scope','$location',function($scope,$location){

      $scope.isActive = function(ab){
        return ab === $location.path(); 
      };  
  }])
  .controller('CarouselDemoCtrl', ['$scope',function ($scope) {
        $scope.myInterval = 5000;
        $scope.noWrapSlides = false;
        $scope.active = 0;
             var currIndex = 0;

        $scope.imagess=[
    {"name": 1,"location":"imgs/1.jpg"},
    {"name": 2,"location":"imgs/2.jpg"},
    {"name": 3,"location":"imgs/3.jpg"},
    {"name": 4,"location":"imgs/4.jpg"},
    {"name": 5,"location":"imgs/5.jpg"},
    {"name": 6,"location":"imgs/6.jpg"},
    {"name": 7,"location":"imgs/7.jpg"}
  ]
  }]);