angular.module('welcomePage.route', [
    'welcomePage.ctrl',
    'contentBottom.directive'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('base.welcome', {
                url: "/welcome",
                views: {
                    "content": {
                        templateUrl: 'welcomePage/welcomePage.html',
                        controller:'welcomePageCtrl',
                        controllerAs:'welcomePageCtrl'
                    }
                }
            })
    });