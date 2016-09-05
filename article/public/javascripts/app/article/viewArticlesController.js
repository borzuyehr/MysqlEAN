angular.module("articleModule")
    .controller("viewArticlesController", viewArticlesController);

viewArticlesController.$inject = ['$scope', '$timeout', 'articleServer'];

function viewArticlesController($scope, $timeout, articleServer){

    $scope.articles = [];

    getAllArticles();

    function getAllArticles() {

        articleServer.getAllArticles().
            success(function (data){
                
                if (data
                        && data.articles
                        && data.articles.length >0){

                            $scope.articles = data.articles;
                        }
            })
    }


    $scope.currentArticleId = 0;

    $scope.setCurrentArticleId = function (articleId){

        $scope.currentArticleId = articleId;
    }


    $scope.deleteArticle = function (){
        
        if ($scope.currentArticleId > 0){
            articleServer.deleteArticleById($scope.currentArticleId)
                .success(function (data){
                    if(data && data.status && data.status == 'successful'){
                        window.location.href = '/viewArticles';
                    }
                })
        }
    }

}