// Création du module AngularJS shoesAPP
var app = angular.module('shoesApp', []);
// Définition du controleur shoesCtrl
app.controller('shoesCtrl', function($scope, $http) {
  // On récupère le json
  $http.get('assets/json/products.json')
  // et on remplit le scope.products
  .then(function(model) {
    $scope.products = model.data
  });
});

$(function () {
  $('[data-toggle="popover"]').popover()
})
