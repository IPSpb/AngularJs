/**
 * Created by ivpopov on 19.08.14.
 */
function GreetCtrl($scope) {
    $scope.name = 'World';
    $scope.action = function() {
        alert('Сработал scope');
    }
}
function ListCtrl($scope) {
    $scope.names = ['Igor', 'Misko', 'Vojta'];
}