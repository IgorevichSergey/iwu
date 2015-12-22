angular.module('pastTransactionPage.route', [
    'pastTransactionPage.ctrl'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('base.pastTransaction', {
                url: "/pastTransaction",
                views: {
                    "content": {
                        templateUrl: 'pastTransactionPage/pastTransactionPage.html',
                        controller:'pastTransactionPageCtrl',
                        controllerAs:'pastTransactionPageCtrl'
                    }
                }
            })
    });