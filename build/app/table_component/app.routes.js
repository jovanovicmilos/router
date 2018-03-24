(function () {

    angular
        .module('app')
        .config(config)

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/', {
                templateUrl: 'dist/app/table_component/views/404.html',
                controller: 'tableController',
                controllerAs: 'vm'
            })
            .when('/table/:filename', {
                templateUrl: 'dist/app/table_component/views/homepage.html',
                controller: 'tableController',
                controllerAs: 'vm',
                resolve: {
                    response: function (tableService, $route, $location) {
                        return tableService.getAll($route.current.params.filename)
                            .then(function success(response) {
                                return response.data;
                            }, function error(response) {
                                if (response.status == 404) {
                                    $location.path('/404');
                                }
                            })
                    }
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
