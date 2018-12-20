/**
 * Created by Aera-Golden on 13/11/2018.
 */


var app =angular.module('app', ['ngMaterial', 'ngMessages']);

app.directive('lazyImage',[function(){
    return {
        restrict: 'EA',
        scope:{
            model:'=lazyImage'
        },
        link: function(scope, element, attrs, ngModel) {
            scope.$watch('model', function(newVal){
                if(newVal){
                    var img = new Image ();
                    $(element).attr('src', 'assets/images/spinner.gif');
                    img.onload = function(e) {
                      $(element).attr('src', newVal);
                    };
                    img.src= newVal;
                }
            })
        }
    }
}]);