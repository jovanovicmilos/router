(function () {

    angular
        .module('app')
        .controller('tableController', tableController)

    tableController.$inject = ['tableService', '$routeParams', '$route'];

    function tableController(tableService, $routeParams, response) {
        
        var vm = this;
        
        vm.data = response;
        vm.search = {};
        vm.now = moment().toDate();
        
        vm.sort = {
            column: '',
            descending: true
        }
        
        vm.sorting = function (column) {
            if (vm.sort.column == column) {
                vm.sort.descending = !vm.sort.descending;
            } else {
                vm.sort.column = column;
                vm.sort.descending = false;
            }
        }

        var isurl = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;

        vm.checkis = function (value) {
            if (typeof value === 'string' && typeof value !== 'number' && !isurl.test(value)) {
                vm.is = 'string'
            } else if (typeof value == 'number') {
                vm.is = 'decimal'
            } else if (typeof value == 'number' && value % 1 == 0) {
                vm.is = 'integer'
            } else if (typeof value === 'string' && !isurl.test(value)) {
                vm.is = 'url'
            } else if (moment(value, moment.ISO_8601, true).isValid()) {
                vm.is = 'date'
            }
        }

        vm.typeofdata = function (value) {
            if (typeof value === 'number' && value % 1 != 0) {
                return 'decimal';
            } else if (typeof value === 'string' && isurl.test(value)) {
                return 'url';
            } else {
                return typeof value;
            }

        }
        
    }
})();