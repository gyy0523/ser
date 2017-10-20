/**
 * Created by 高媛媛 on 2017/10/19.
 */
app.controller("serController",['$scope','server',function($scope,server){
    server.then(function(data){
        $scope.userInfo=data.data;
    })
}])