app.controller('sidebarCtrl',['$scope','storage',function($scope,storage){

    angular.extend($scope,storage);
    $scope.data ={

    };
    var watch = $scope.$watch(function () {
        return storage.isLoad;
    }, function (newVal, oldVal) {
        if(!oldVal && newVal){
            init(storage.data.projects,storage.data.tools);
            watch();
        }
    });
    function init(proje,tools){
        var projects = proje;
        var inUse = [];
        var tec ={};
        angular.forEach(projects,function(v,k){
            if('tools' in v){
                angular.forEach(v.tools, function(v2,k2){
                    if(v2 && inUse.indexOf(k2) == -1 ){
                        inUse.push(k2);
                    }
                });
            }
        });
        angular.forEach(inUse,function(v,k){
            var data = $scope.get_toolt(v);
            console.log('vasd',data);
            if(data){
                angular.forEach(data.cat,function(v2,k2){
                    if(v2){
                        if(!(k2 in tec)){
                            tec[k2] = {};
                        }
                        tec[k2][v]=data;
                    }
                });
            }
        });
        $scope.menus = tec;
        $scope.filtersMenus = tec;

    }
    $scope.get_toolt = function(key){
        return storage.data.tools[key];
    };

    $scope.filter = function(text){
        if(text){
            var resul = {};
            var band = {};
            angular.forEach($scope.menus,function(v,k){

                if(k.toLowerCase().startsWith(text.toLowerCase())){
                    if(!(k in resul)){
                        resul[k] = v;
                    }
                }else{
                    band = {};
                    angular.forEach(v,function(v2,k2){
                        if(k2.startsWith(text.toLowerCase()) ||
                            v2.title.toLowerCase().startsWith(text.toLowerCase())||
                            v2.title.toLowerCase().indexOf(text.toLowerCase()) != -1
                        ){
                            band[k2]=v2;
                        }
                    });
                    if(Object.keys(band).length > 0){
                        resul[k] = band;
                    }
                }
            });
            $scope.filtersMenus = resul;
            // $scope.$apply();
        }else{

            $scope.filtersMenus = angular.copy($scope.menus);
        }
    }
}]);