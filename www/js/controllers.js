angular.module('starter.controllers', ['ngStorage'])


    .controller('Ctrl', function($scope, $localStorage, $state, $timeout) {

      $scope.tip = 0;
      $scope.price = '';
      $scope.total = 0;
      $scope.rate = $localStorage.rate;
      $scope.error = '';

      $scope.calculate = function(price) {
        if (price !== '') {
          price = parseFloat(price);
          $scope.tip = price*$localStorage.rate/100;
          $scope.total = price + $scope.tip;
          $scope.rate = $localStorage.rate;
          $scope.error = '';
        }
        else {
          $scope.error = 'Veuillez entrer un montant !';
          $scope.tip = 0;
          $scope.total = 0;
        }
      };

      $scope.changeRate = function(rate) {
        if (rate !== '') {
          $localStorage.rate = rate;
          $scope.rate = $localStorage.rate;
          $scope.error = '';
          $state.go('tab.home');
        }
        else {
          $scope.error = 'Veuillez entrer un pourcentage !';
        }
      }

    });

