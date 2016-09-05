angular.module("articleModule")
    .controller("articleController", articleController);

articleController.$inject = ['$scope', '$timeout', 'articleServer', 
                            'requiredFieldValidationService'];

function articleController($scope, $timeout, articleServer){

    $scope.articleName = {
        categoryName : "",
        articleDescription : ""
    };


    $scope.message = {

        containsSuccessfulMessage : false,
        successfulMessage : ""
    }


    $scope.validationResult = {
        containsValidationError : false,
        validationSummary : ""
    }


    function clearArticle(){
        $scope.articleName.categoryName = "";
        $scope.articleName.articleDescription = "";
    }


    function clearMessage() {
        $scope.message.containsSuccessfulMessage = false;
        $scope.message.successfulMessage = "";
    }


    function displayMessage() {
        $scope.message.containsSuccessfulMessage = true;
        $scope.message.successfulMessage = "A record is created successfully";
    }

    $scope.createArticle = function (articleName) {

        var validationMessage = requiredFieldValidationService.getRequiredFieldValidationErrorMessage(
            [
                {name : $scope.articleName.categoryName || "", errorMessage: 'Please enter article name\n'},
                {name : $scope.articleName.articleDescription || "", errorMessage: 'Please enter article Description\n'},
            ]);

        if (validationMessage.length >0) {

            $scope.validationResult.containsValidationError = true;

            angular.element("#validationErrorMessage").empty();

            validationMessage.forEach( function (errorMessage){
                
                angular.element("<li></li>")
                                .html(errorMessage)
                                .appendTo("#validationErrorMessage")
            });
        }

        else {

            $scope.validationResult.containsValidationError = false;

            articleServer.createArticle(articleName)
            .success(function(data){
                
            if(data.status && data.status == 'successful')
                
                        displayMessage();

                        alert ("data posted successfully!!");

               $timeout(function() {
                  clearMessage();
                  clearArticle();
                }, 3000)
            });
        }

        
    }

}