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
            bases:{'bootstrap':true},
            gallery:{
                'cesta': {title:'Cesta',img:'imgs/projects/freshveg/cesta.png'},
                'ingresar':{title:'Ingresar',img:'imgs/projects/freshveg/ingresar.png'},
                'inicio':{title:'Inicio',img:'imgs/projects/freshveg/inicio.png'},
                'mi_cuenta':{title:'Mi cuenta',img:'imgs/projects/freshveg/mi_cuenta.png'}
            },
            link:"",
            descrip:"Se require la realización de una pagina web que permite a los clientes la realizacion de pedidos, la misma " +
            "debe mostrar de los diferentes productos (frutas y verduras ) su precio, descripcion y las ofertas que estan pautadas " +
            "para determinadas fechas debe realizar el cargo de flete segun destino y imprirmir un comprobante al momento de realizar la comprar, " +
            "a su vez se debe tomar en cuenta la emision de cupones a diferentes clientes como incentivo para comprar estos ejercen un descuento sobre" +
            " el total de la la factura.",
            tools:{'bootstrap':true,'codeigniter':true}
        },
        {


            title:'FreshVeg',
            date:'03/2018',
            img:'imgs/projects/freshveg/logo.png',
            status:'Proceso',
            bases:{'bootstrap':true},
            gallery:{
                'cesta': {title:'Cesta',img:'imgs/projects/freshveg/cesta.png'},
                'ingresar':{title:'Ingresar',img:'imgs/projects/freshveg/ingresar.png'},
                'inicio':{title:'Inicio',img:'imgs/projects/freshveg/inicio.png'},
                'mi_cuenta':{title:'Mi cuenta',img:'imgs/projects/freshveg/mi_cuenta.png'}
            },
            link:"",
            descrip:"Se require la realización de una pagina web que permite a los clientes la realizacion de pedidos, la misma " +
            "debe mostrar de los diferentes productos (frutas y verduras ) su precio, descripcion y las ofertas que estan pautadas " +
            "para determinadas fechas debe realizar el cargo de flete segun destino y imprirmir un comprobante al momento de realizar la comprar, " +
            "a su vez se debe tomar en cuenta la emision de cupones a diferentes clientes como incentivo para comprar estos ejercen un descuento sobre" +
            " el total de la la factura.",
            tools:{'bootstrap':true,'codeigniter':true}
        },
        {


            title:'FreshVeg',
            date:'03/2018',
            img:'imgs/projects/freshveg/logo.png',
            status:'Proceso',
            bases:{'bootstrap':true},
            gallery:{
                'cesta': {title:'Cesta',img:'imgs/projects/freshveg/cesta.png'},
                'ingresar':{title:'Ingresar',img:'imgs/projects/freshveg/ingresar.png'},
                'inicio':{title:'Inicio',img:'imgs/projects/freshveg/inicio.png'},
                'mi_cuenta':{title:'Mi cuenta',img:'imgs/projects/freshveg/mi_cuenta.png'}
            },
            link:"",
            descrip:"Se require la realización de una pagina web que permite a los clientes la realizacion de pedidos, la misma " +
            "debe mostrar de los diferentes productos (frutas y verduras ) su precio, descripcion y las ofertas que estan pautadas " +
            "para determinadas fechas debe realizar el cargo de flete segun destino y imprirmir un comprobante al momento de realizar la comprar, " +
            "a su vez se debe tomar en cuenta la emision de cupones a diferentes clientes como incentivo para comprar estos ejercen un descuento sobre" +
            " el total de la la factura.",
            tools:{'bootstrap':true,'codeigniter':true}
        },
        {


            title:'FreshVeg',
            date:'03/2018',
            img:'imgs/projects/freshveg/logo.png',
            status:'Proceso',
            bases:{'bootstrap':true},
            gallery:{
                'cesta': {title:'Cesta',img:'imgs/projects/freshveg/cesta.png'},
                'ingresar':{title:'Ingresar',img:'imgs/projects/freshveg/ingresar.png'},
                'inicio':{title:'Inicio',img:'imgs/projects/freshveg/inicio.png'},
                'mi_cuenta':{title:'Mi cuenta',img:'imgs/projects/freshveg/mi_cuenta.png'}
            },
            link:"",
            descrip:"Se require la realización de una pagina web que permite a los clientes la realizacion de pedidos, la misma " +
            "debe mostrar de los diferentes productos (frutas y verduras ) su precio, descripcion y las ofertas que estan pautadas " +
            "para determinadas fechas debe realizar el cargo de flete segun destino y imprirmir un comprobante al momento de realizar la comprar, " +
            "a su vez se debe tomar en cuenta la emision de cupones a diferentes clientes como incentivo para comprar estos ejercen un descuento sobre" +
            " el total de la la factura.",
            tools:{'bootstrap':true,'codeigniter':true}
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
            descrip:"Se require la realización de una pagina web que permite a los clientes la realizacion de pedidos, la misma " +
            "debe mostrar de los diferentes productos (frutas y verduras ) su precio, descripcion y las ofertas que estan pautadas " +
            "para determinadas fechas debe realizar el cargo de flete segun destino y imprirmir un comprobante al momento de realizar la comprar, " +
            "a su vez se debe tomar en cuenta la emision de cupones a diferentes clientes como incentivo para comprar estos ejercen un descuento sobre" +
            " el total de la la factura.",
            img:'imgs/frameworks/bootstrap.png',
            link:"",
            cat:{'FrontEnd':true,'Javascript':true,'Librerias':true,'Framework':true, '_bases':false}
        },
        codeigniter:{
            title:'Codeigniter',
            img:'imgs/frameworks/bootstrap.png',
            descrip:"Se require la realización de una pagina web que permite a los clientes la realizacion de pedidos, la misma " +
            "debe mostrar de los diferentes productos (frutas y verduras ) su precio, descripcion y las ofertas que estan pautadas " +
            "para determinadas fechas debe realizar el cargo de flete segun destino y imprirmir un comprobante al momento de realizar la comprar, " +
            "a su vez se debe tomar en cuenta la emision de cupones a diferentes clientes como incentivo para comprar estos ejercen un descuento sobre" +
            " el total de la la factura.",
            link:"",
            cat:{'BackendEnd':true,'Php':true,'Framework':true}
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
            angular.forEach(array,function(v,k){
                if(k in storage){
                    result.push(storage[k]);
                }
            });
            return result;

        }

    }
}]);

app.controller('AppCtrl',['$scope','$firebaseArray','storage','projects','tools',function($scope,$firebaseArray, storage,projects,tools){
    var ref = new Firebase("https://leugin-io.firebaseio.com/projects");

     var syncObject = $firebaseArray(ref);

     syncObject.$loaded().then(function(data){
        console.log("cargado",data);
        var copy = angular.copy(syncObject);
     console.log(syncObject, copy);
     })
     
    $scope.data = {
        projects:projects.get()
    };
    //syncObject.$bindTo($scope, "projects");

    $scope.accion={};
    $scope.accion.tools = tools;
    $scope.dtp ={
        mail:'meqh1992@gmail.com',
        facebook:'https://web.facebook.com/LeuginOdraudeBook',
        github:'https://github.com/leugin',
        book:'https://leugin.github.io'
    };
    $scope.nameLink = function(link){
        var last = link.lastIndexOf('/');
        return (last != -1) ? link.substr(last + 1) : link;
    }

    $scope.objectCount = function(obj){
        return Object.keys(obj).length;
    }

}]);



app.controller('galleryCtrl',['$scope',function($scope){

    $scope.$parent.accion.gallery= function(data){
        $scope.model = data;
        $('#galleryDialog').modal('show');

    }
}]);


app.controller('bookCtrl',['$scope','tools',function($scope,tools){

    $scope.$parent.accion.book= function(data){
        $scope.model = data;
        $scope.model.libs = tools.getAll(data.tools);
        var txt ='';
        angular.forEach($scope.model.libs,function(v,k){
            txt ='';
            angular.forEach(v.cat,function(v2,k2){
                if(v2){
                    txt += k2 + ' ';
                }

            });
            v.cats = txt;

        });

        $('#bookDialog').modal('show');

    };
}]);


app.controller('tectCtrl',['$scope','tools','projects',function($scope,tools,projects){
    $scope.template='template.html';
    $scope.setTemplate=function(url){
        $scope.template = url +".html";
    }
    $scope.$parent.accion.tect= function(data,key){
        console.log(data,key);
        $scope.model = data;
        $scope.tecnolgi = data;
        $scope.projects = [];
        $scope.setTemplate('templates/tecnologia');
        angular.forEach(projects.get(),function(v,k){
            if(key in v.tools ){
                $scope.projects.push(v);
            }
        });
        $('#tectDialog').modal('show');

    };
    $scope.viewProject = function(model){
        $scope.model = model;
        $scope.setTemplate('templates/project')
    }
    $scope.back= function(){
        $scope.model = angular.copy($scope.tecnolgi)
        $scope.setTemplate('templates/tecnologia');
    }
}]);