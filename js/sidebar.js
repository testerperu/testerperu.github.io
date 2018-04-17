app.controller('sidebarCtrl',['$scope','projects','tools',function($scope,projects,tools){
   
    init(projects,tools);
    function init(projects,tools){     
        var projects = projects.get();
         var inUse = [];
         var tec ={}
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
             var data = tools.get(v);
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

    }
}]);