/* global angular */

angular.module('homeApp', ['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider.when('/', {
        template: '<h1>Angular template home page</h1>'
    }).when('about', {
        template: '<h1>Angular about home page</h1>'
    });
}