myApp.directive("addComment", [ function(){
    return{
        restrict: "E",
        scope: {commentsList : "="},
        templateUrl: "../views/addComments.html",
        link: function(scope, element, attr){
            this.resetData = function(){
                scope.newComment = {mail: "",
                    message: ""};
                scope.commentForm.$setPristine();
            }

            this.resetData();

            this.add = function(){
                if (scope.commentForm.$valid){
                    scope.commentsList.push(scope.newComment);
                    this.resetData();
                }
            }
        }
    }
}]);
