angular.module('footer.directive', [])
    .directive('footerDirective', function(){
        var directive = {
            restrict:'E',
            templateUrl:'directives/footerDirective/footerDirective.html'
        };
        return directive;
    });