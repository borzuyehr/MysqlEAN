angular.module("articleModule")
    .controller("editArticleController", editArticleController);

editArticleController.$inject = ['$scope', '$timeout', 'articleServer'];

function editArticleController($scope, $timeout, articleServer){

    $scope.articleName = {
        categoryName : "",
        articleDescription : ""
    };

    getArticleById();


    $scope.message = {

        containsSuccessfulMessage : false,
        successfulMessage : ""
    }

    function displayMessage() {
        $scope.message.containsSuccessfulMessage = true;
        $scope.message.successfulMessage = "A record is created successfully";
    }


    function bindView(articleName){

        $scope.articleName.categoryName = articleName.CategoryName;
        $scope.articleName.articleDescription = articleName.Details;
    }


    function getArticleById() {

        articleServer.getArticleByIds(articleServer.getIdFromEndPoint()).
            success(function (data){
                
                //console.log(data);
                if (data
                        && data.articles
                        && data.articles.length >0){

                            //console.log(data.articles);
                            bindView(data.articles [0]);
                        }
            })
    }



    $scope.editArticle = function (){
        articleServer.updateArticle($scope.articleName, articleServer.getIdFromEndPoint())
        .success(function (data){

            if (data && data.status == 'successful'){

                displayMessage();
                alert ("Article Edited Successfully!!");
            }
        })
    }

}