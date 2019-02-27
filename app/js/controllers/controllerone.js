(function (){
'use strict';
angular
    .module('myApp')
    .controller('controllerone', controllerone);

controllerone.$inject = ['$scope'];

function controllerone(
$scope
){
        $scope.snippet = '<span style="color:red"> hi there </span>';
        $scope.sortOrder = "name";
        $scope.carList = [
            'https://media.wired.com/photos/5b86fce8900cb57bbfd1e7ee/master/pass/Jaguar_I-PACE_S_Indus-Silver_065.jpg',
            'https://media.wired.com/photos/59bafdf204afdc5248726f5c/master/w_2400,c_limit/BMW-TA.jpg',
            'https://www.cstatic-images.com/stock/570x380/28/img-508537927-1543520949528.jpg',
            'https://cdn.vox-cdn.com/uploads/chorus_image/image/59319581/A182669_medium.0.jpg',
            'https://article.images.consumerreports.org/prod/content/dam/CRO%20Images%202017/Magazine-Articles/April/CR-Inline-top-picks-Toyota-Yaris-02-17',
            'https://www.cstatic-images.com/stock/570x380/51/img-87449141-1543521013951.jpg',
            'https://img.newatlas.com/mazda-vision-coupe-wins-2018-concept-car-of-the-year-4.jpg?auto=format%2Ccompress&ch=Width%2CDPR&fit=crop&h=347&q=60&rect=0%2C106%2C1620%2C912&w=616&s=a40e38fdb6995f043b03589dd2e2bf6e',
            'https://amp.businessinsider.com/images/592f4169b74af41b008b5977-750-563.jpg',
            'https://www.mercedes-benz.com/wp-content/uploads/sites/3/2018/08/00-mercedes-benz-vision-eq-silver-arrow-2018-show-car-world-premiere-3400x1440.jpg'
        ]

    };
})();
