
var dep = ['$mdSidenav','$scope','data'];
var controller = function($mdSidenav, $scope,data){
    angular.extend($scope,data);
   
};
angular.module('app').controller('ProfileCtrl',dep.concat([controller]));