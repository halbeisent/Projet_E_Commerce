// Création du module AngularJS shoesAPP
var app = angular.module('shoesApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
  //Je configure mon routeProvider pour que la racine (/) affiche mon fomulaire
  $routeProvider.when('/', {templateUrl : 'views/allProducts.html', controller: 'shoesCtrl'})
  //Je le configure ensuite pour que ma vue de mail (/mailView) affiche les détails du message
                .when('/:model', {templateUrl: 'views/byBrand.html', controller: 'shoesCtrl'})
  }]);
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
