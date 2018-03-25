(function () {

    angular
        .module('app')
        .service('tableService', tableService)
        
    tableService.$inject = ['$http']; 
    
    function tableService($http) {
        return {
            getAll: function (filename) {
                url = 'assets/json/' + filename + '.json';
                return $http.get(url);
            }
        }
    }

})();
