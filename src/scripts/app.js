(function () {

    var blog = angular.module('dkubisBlog', ['ngRoute', 'blog.controllers']);

    blog
        .constant('API_URL', 'https://jsonplaceholder.typicode.com/posts')
        .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
            $httpProvider.defaults.cache = true;

            $routeProvider
                .when('/', {
                    controller: 'BlogController',
                    templateUrl: 'src/views/blog.html'
                })
                .when('/blog/:id', {
                    controller: 'PostController',
                    templateUrl: 'src/views/post.html'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();