            
var app;
var user = {};


app = angular.module('myApp', ['ngRoute']);

app.controller('BusinessCard', ['$scope', '$http', function ($scope, $http) {
    // $scope.leftMenuData = {
    //     fullName: ''
    // };
        serviceCall($http,$scope);




    //  if(name){
    //      console.log(name);
    //  }


    $scope.Accept = function () {




        user = {
            fullName: $scope.fullName,
            Occupation: $scope.Occupation,
            Company: $scope.Company,
            website: $scope.website,
            email: $scope.email,
            background: $scope.color,
            image: $scope.imge
        }







    };


}]);


app.config(function ($routeProvider) {
    $routeProvider.when("/card", {
            templateUrl: "card.html"
        });
});
