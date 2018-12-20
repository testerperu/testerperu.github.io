
var dep = ['$mdSidenav','$scope','data'];
var controller = function($mdSidenav, $scope,data){
    angular.extend($scope,data);
};
angular.module('app').controller('menuBarCtrl',dep.concat([controller]));