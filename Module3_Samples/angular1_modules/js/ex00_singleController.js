var app = angular.module('app', []);

app.controller('TextController', function ($scope) {
    $scope.text = {
        message: 'Welcome!!'
    };
});
app.controller('ItemController', function ($scope) {
    $scope.items = [{
        title: 'Pencil',
        quantity: 8,
        price: 4.2
    }, {
        title: 'Pen',
        quantity: 2,
        price: 5.2
    }, {
        title: 'Watch',
        quantity: 3,
        price: 10.2
    }];
});