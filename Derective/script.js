/**
 * Created by ivpopov on 19.08.14.
 */
angular.module('directive', []).directive('contenteditable', function(){
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            //вид -> модель
            elm.bind('blur', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(elm.html());
                });
            });

            //модель -> вид
            ctrl.$render = function(value) {
                elm.html(value);
            }

            // загрузка начального значения из Dom
            ctrl.$setViewValue(elm.html());
        }
    }
})