angular.module('header.directive', [])
    .directive('headerDirective', function(){
        var directive = {
            restrict:'E',
            templateUrl:'directives/headerDirective/headerDirective.html'
        };
        return directive;
    });