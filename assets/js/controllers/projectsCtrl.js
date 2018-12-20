
var dep = ['$mdSidenav','$mdDialog','$scope','data'];
var app =angular.module('app');
var controller = function($mdSidenav, $mdDialog,$scope,data){
    angular.extend($scope,data);
    $scope.showPrerenderedDialog = function(ev,item) {
        $mdDialog.show({
            contentElement: '#myDialog',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
        var el = angular.element("#project");
        el.scope().model = angular.copy(item);
    };

    $scope.showImagesDialog = function(ev,item) {
        $mdDialog.show({
            contentElement: '#imagesDialog',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true
        });
        var el = angular.element("#images");
        el.scope().select  = false;
        el.scope().model = angular.copy(item);
    };

    $scope.openImages = function(id){

        $('#_image'+id).viewer().show();
    }


};
app.controller('projectsCtrl',dep.concat([controller]));
app.controller('projectCtrl',['$scope','data',function($scope,data){
    $scope.model ={bases:[]};
    angular.extend($scope,data);
}]);
app.controller('galleryCtrl',['$scope','data',function($scope,data){
    $scope.model = {};
    $scope.select = false;
}]);