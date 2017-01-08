(function () {

    var blogCtrl = angular.module('blog.controllers', []);

    blogCtrl.controller('BlogController', ['API_URL', '$http', '$scope',  function(API_URL, $http, $scope) {
        $http.get(API_URL)
            .then(function(res) {
                $scope.posts = res.data;
            })
    }]);

    blogCtrl.controller('PostController', ['API_URL', '$http', '$routeParams', '$scope', function(API_URL, $http, $routeParams, $scope) {
        $http.get(API_URL + '/' + $routeParams.id)
            .then(function(res) {
                $scope.post = res.data;
            })
    }]);

})();