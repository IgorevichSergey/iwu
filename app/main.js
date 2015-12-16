angular.module('iwuProject', [
    'ui.router',
    'templates',
    'baseView.route'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/welcome");
    })