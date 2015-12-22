angular.module('baseView.route', [
    'header.directive',
    'footer.directive',
    'welcomePage.route',
    'pastTransactionPage.route'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('base', {
                url: "",
                templateUrl: 'baseView/baseView.html',
                abstract: true
            })
    });