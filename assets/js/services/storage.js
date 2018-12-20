

var dep = ['$http'];
var controller = function($http){
    function storage(){
        this.state = 'initial';
        this.data = {
            projects:{},
            tools:{},
            cats:[],
            studies:[],
            works:[],
            plus:[],
            langs:[],
            frameworks:[],
            dtp:{}
        };
        this.load = function(){
            var _self= this;
            _self.state= 'loading';
            $("#loader").addClass('show');
            $http.get('https://meqh5.000webhostapp.com/api_leugin/data').then(function(data){
                angular.extend(_self.data, data.data.data);
                _self.state= 'load';
                $("#loader").removeClass('show');
            });
        };
        this.load();
        this.get_tool = function(key){
            return key in this.data.tools ? this.data.tools[key] : {};
        }
    }
    return  new storage();
};
angular.module('app').service('data',dep.concat([controller]));