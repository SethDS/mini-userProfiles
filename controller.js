angular.module('userProfiles').controller('MainController', function($scope, theService){
    
   $scope.users = theService.getUsers();
   $scope.addToFavorites = function (id){
       theService.toggleFavorite(id);
    }
});