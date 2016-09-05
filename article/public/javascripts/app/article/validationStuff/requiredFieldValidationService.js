angular.module("articleModule")
    .factory("requiredFieldValidationService", requiredFieldValidationService);



function requiredFieldValidationService(){

    function _getRequiredFieldValidationErrorMessage (requiredInformation){

        var errorMessage = [];
        if (requiredInformation.length > 0){ 

            angular.forEach(requiredInformation,

            function (requiredInfo){

                if (requiredInfo.name !== 'undefined' &&
                        (
                        requiredInfo.name === null ||
                        requiredInfo.name == '' ||
                        requiredInfo.name.length == 0
                        ))
                    {
                    errorMessage.push(requiredInfo.errorMessage);    
                    }
            });
        }

        return errorMessage;
    }

    return {

        getRequiredFieldValidationErrorMessage : _getRequiredFieldValidationErrorMessage
    };

     
}