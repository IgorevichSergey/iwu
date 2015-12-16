angular.module('contentBottom.directive', [

])
    .directive('contentBottomDirective', function(){
        var directive = {
            restrict:'E',
            templateUrl:'directives/contentBottomDirective/contentBottomDirective.html'
        };
        return directive;
    });