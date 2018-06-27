
var app = angular.module('App');
app.service('storage',['$http',function($http){
    this.data ={};
    this.isLoad = false;
    this.load = function(){
        var _selt = this;
        $http.get('https://ozaveynq.lucusvirtual.es/api_leugin/data').then(function (data) {
            console.log(data);
            angular.extend(_selt.data, data.data.data);
            _selt.isLoad = true;
        });
    }
    this.load();
    return this;
}]);

app.factory('firebaseLoader',function($firebaseArray){

    function Model (url){
        this.data = [];
        this.state = 'init';
        this.url = url;
        var ref = new Firebase(url);

        this.load = function(){
            var _selt = this;
            this.state= 'loading';
            var syncObject = $firebaseArray(ref);
            syncObject.$loaded().then(function(data){
                _selt.data = data;
                this.state= 'load';
            });
        }
    }

    return Model;
});
