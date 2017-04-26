function serviceCall($http,$scope)
{

     $http.get('user.json').success(function (data) {

        $scope.userobj = data;

        $scope.fullName = $scope.userobj.fullName;

        $scope.Occupation = $scope.userobj.Occupation;

        $scope.Company = $scope.userobj.Company;

        $scope.website = $scope.userobj.website;

        $scope.email = $scope.userobj.email;

        $scope.color = $scope.userobj.background;

        $scope.imge = $scope.userobj.imge;

        //console.log($scope.imge);

    }).error(function (err) {
        $scope.userobj = user;
    });


}