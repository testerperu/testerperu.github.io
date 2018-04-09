/**
 * Miguel E. Quevedo H.
 *
 * **/


var app = angular.module('App',['firebase']);

app.service('projects',['$firebaseObject',function($firebaseObject){

    var storage = [
        {
            title:'FreshVeg',
            date:'03/2018',
            img:'imgs/projects/freshveg/logo.png',
            status:'Proceso',
            bases:['bootstrap'],
            gallery:[
                {title:'Cesta',img:'imgs/projects/freshveg/cesta.png'},
                {title:'Ingresar',img:'imgs/projects/freshveg/ingresar.png'},
                {title:'Inicio',img:'imgs/projects/freshveg/inicio.png'},
                {title:'Mi cuenta',img:'imgs/projects/freshveg/mi_cuenta.png'}
            ],
            link:"",
            descrip:"Se require la realización de una pagina web que permite a los clientes la realizacion de pedidos, la misma " +
            "debe mostrar de los diferentes productos (frutas y verduras ) su precio, descripcion y las ofertas que estan pautadas " +
            "para determinadas fechas debe realizar el cargo de flete segun destino y imprirmir un comprobante al momento de realizar la comprar, " +
            "a su vez se debe tomar en cuenta la emision de cupones a diferentes clientes como incentivo para comprar estos ejercen un descuento sobre" +
            " el total de la la factura.",
            tools:['bootstrap','codeigniter']
        }
    ];

    return {
        get:function(){
            return storage;
        },
        set:function(data){
            storage = data;
            return storage
        }
    }
}]);
app.service('tools',[function(){


    var storage = {
        bootstrap:{
            title:'Bootstrap',
            img:'imgs/frameworks/bootstrap.png',
            link:"",
            cat:['FrontEnd','Javascript','Librerias','Framework', '_bases']
        },
        codeigniter:{
            title:'Codeigniter',
            img:'imgs/frameworks/bootstrap.png',
            link:"",
            cat:['BackendEnd','Php','Framework']
        }

    };

    return {
        get:function(key){
            return !key ? storage : storage[key];
        },
        set:function(data){
            storage = data;
            return storage
        },
        getAll: function(array){
            var result = [];
            angular.forEach(array,function(v){
                if(v in storage){
                    result.push(storage[v]);
                }
            });
            console.log(array);
            return result;

        }

    }
}]);

app.controller('AppCtrl',['$scope','$firebaseObject','projects','tools',function($scope,$firebaseObject, projects,tools){
    var ref = new Firebase("https://leugin-io.firebaseio.com/projects");

    var syncObject = $firebaseObject(ref);
    console.log(syncObject);

    $scope.data = {
        projects:projects.get()
    };
    syncObject.$bindTo($scope, "projects");

    $scope.accion={};
    $scope.accion.tools = tools;

}]);



app.controller('galleryCtrl',['$scope',function($scope){

    $scope.$parent.accion.gallery= function(data){
        $scope.model = data;
        $('#galleryDialog').modal('show');

    }
}]);
app.controller('bookCtrl',['$scope',function($scope){

    $scope.$parent.accion.book= function(data){
        $scope.model = data;
        $('#bookDialog').modal('show');

    }
}]);