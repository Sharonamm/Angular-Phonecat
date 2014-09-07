//'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });

    $scope.orderProp = 'age';
});

//describe('PhoneListCtrl', function(){
//
//    it('should create "phones" model with 3 phones', function() {
//        var scope = {},
//            ctrl = new PhoneListCtrl(scope);
//
//        expect(scope.phones.length).toBe(3);
//    });
//
//});