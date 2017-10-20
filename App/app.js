/**
 * Created by 高媛媛 on 2017/10/19.
 */
var app = angular.module("myApp",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when('/ser',{
            templateUrl:"./App/Views/ser.html",
            controller:"serController"
        })
})