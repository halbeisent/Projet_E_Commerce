// Création du module AngularJS shoesAPP
var app = angular.module('shoesApp', []);
// Définition du controleur shoesCtrl avec module $scope et $http
app.controller('shoesCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.catFilter = '';
  // On récupère le json
  $http.get('assets/json/products.json')
  // et on remplit le scope.products
  .then(function(model) {
    $scope.products = model.data
  });

// Gestion CART _________________________________________________________________________________________________________

  // Création du tableau cart
  $scope.cart = [];
  // Création de la fonction findItemById avec la library underscore.js pour défnir les occurences : True ou False
  var findItemById = function(items, id) {
    return _.find(items, function(model) {
      return model.prodRef === id;
    });
  };
<<<<<<< HEAD
  // calcul du prix total en fonction de la quantité
  $scope.getCost = function(model) {
    return model.qtyCart * model.prodPrice;
  };
=======
>>>>>>> b10f9f4e0a25ea21215a01e0395e2d51dd1dd3f6

  // Utilisation de la fonction findItemById pour définir si présent dans le tableau, si présent = Qty + 1, sinon on push les donnée dans cart.
  $scope.addItem = function(itemToAdd) {
    var found = findItemById($scope.cart, itemToAdd.prodRef);
    if (found) {
      found.qtyCart += itemToAdd.qtyCart; // si true = just +1
    }
    else {
      $scope.cart.push(angular.copy(itemToAdd));} // si false on push les données dans le tableau carts
  };

  // calcul du prix total en fonction de la quantité
  $scope.getCost = function(model) {
    return model.qtyCart * model.prodPrice;
  };

  // Calcul du nombre total d'articles dans tableau Cart avec fonction reduc + sum
  $scope.totalQty = function() {
    var total =  _.reduce($scope.cart, function(sum, model) { // sum en tant qu'accu
      return sum + model.qtyCart;
    }, 0);
      return total;
  };

  // Calcul du prix total via le total $scope.getCost dans tableau Cart avec fonction reduc + sum
  $scope.getTotal = function() {
    var total =  _.reduce($scope.cart, function(sum, model) { // sum en tant qu'accu
      return sum + $scope.getCost(model);
    }, 0);
      return total;
  };

  // on crée la fonction removeItem en créant une var index qui prends l'index de model puis le supprime ( splice 1 model a partir de la position de l'index )
    $scope.removeItem = function(model) {
      var index = $scope.cart.indexOf(model);
      $scope.cart.splice(index, 1);
    };

// fin de gestion CART _________________________________________________________________________________________________________

}]);// fin du controller

$(function (){ // Chargement du script quand le doc est chargé
  $('[data-toggle="popover"]').popover() // Fonction popover pour les Description en mode popover
})
