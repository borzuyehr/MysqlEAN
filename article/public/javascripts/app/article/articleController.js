angular.module("articleModule")
    .controller("articleController", articleController);

articleController.$inject = ['$scope', '$timeout', 'articleServer'];

function articleController($scope, $timeout, articleServer){

    $scope.articleName = {
        categoryName : "",
        articleDescription : ""
    };



    $scope.createArticle = function (articleName) {

            articleServer.createArticle(articleName)
            .success(function(data){
                
            if(data.status && data.status == 'successful')

                        alert ("data posted successfully!!");

               $timeout(function() {

                }, 3000)
            });
        

        
    }

}