
var dep = ['$mdSidenav','$scope','data'];
var controller = function($mdSidenav, $scope,data){
    $scope.select = false;

};
angular.module('app').controller('galleryCtrl',dep.concat([controller]));