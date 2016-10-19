angular.module('starter.controllers', ['ngStorage'])


    .controller('Ctrl', function($scope, $localStorage, $state, $window) {

      $scope.tip = 0;
      $scope.price = '';
      $scope.total = 0;
      $scope.rate = $localStorage.rate;

      $scope.calculate = function(price) {
        price = parseFloat(price);
        $scope.tip = price*$localStorage.rate/100;
        $scope.total = price + $scope.tip;
      };

      $scope.changeRate = function(rate) {
        $localStorage.rate = rate;
        $scope.rate = $localStorage.rate;
      }

    });

