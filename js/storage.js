
var app = angular.module('App');
app.service('storage',['$firebaseArray','firebaseLoader',function($firebaseArray,firebaseLoader){
		this.data =[
			new firebaseLoader('https://leugin-io.firebaseio.com/projects')
		,
			new firebaseLoader('https://leugin-io.firebaseio.com/tools')
		];
	this.load = function(){
		var _selt = this;
		angular.forEach(_selt.data,function(v,k){
			v.load();
		});
	}
	this.load();
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
