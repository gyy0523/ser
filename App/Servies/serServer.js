/**
 * Created by 高媛媛 on 2017/10/19.
 */
app.factory('server',function($q,$http){
    var def = $q.defer();
    $http({url:"./Data/data.json"}).then(function(data){
        def.resolve(data);
    })
    return def.promise;
})