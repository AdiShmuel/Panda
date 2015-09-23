myApp.directive("commentsView", ['md5', function(md5){
    return{
        restrict: "E",
        scope: {commentsList : "=",
                search : "="},
        replace: true,
        templateUrl: "../views/commentsView.html"
    }
}]);
