angular.module('candidate', [])
    .controller('MainCtrl', [
  '$scope', '$http',
  function ($scope, $http) {
            $scope.candidates = [];

            $scope.getAll = function () {
                console.log('getAll');

                return $http.get('/candidates').success(function (data) {
                    angular.copy(data, $scope.candidates);
                    console.log(data);
                });
            };

            $scope.addCandidate = function () {
                console.log('addcandidate');
                var newcandidate = {
                    name: $scope.formContent,
                };

                if ($scope.formContent === '') {
                    return;
                }
                console.log("In addCandidate with " + $scope.formContent);
                return $http.post('/candidates', newcandidate).success(function (data) {
                    $scope.candidates.push(data);
                    console.log(data);
                });
                $scope.formContent = '';
            };

            $scope.delete = function (candidate) {
                $http.delete('/candidates/' + candidate._id)
                    .success(function (data) {
                        console.log("delete worked");
                    });
                $scope.getAll();
            };

            $scope.getAll();
  }
]);
