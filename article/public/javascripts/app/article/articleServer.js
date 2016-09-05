angular.module("articleModule")
    .factory("articleServer", articleServer);

articleServer.$inject = ['$http', '$location'];

function articleServer($http, $location){

    return {


        createArticle : function (articleName){

            return $http.post('/createArticle',
                {
                nameOfArticle : articleName.categoryName,
                articleDetails : articleName.articleDescription
                }
            );
        },



        getAllArticles : function () {

            return $http.get('/getAllArticles');
         },


         getIdFromEndPoint : function () {

             var absoluteUrl = $location.absUrl();

             var segments = absoluteUrl.split("/");

             var articleCategoryId = segments[segments.length - 1];

             return articleCategoryId;
         },


         getArticleByIds : function (articleId) {

             //console.log(articleId);
             return $http.get ('/getArticleCategoryById/' + articleId);
         },

         
         updateArticle : function (articleName, articleId){
             console.log(articleName.categoryName);
             console.log(articleName.articleDescription);
             console.log(articleId);

             return $http.post('/updateArticle',
                {
                nameOfArticle : articleName.categoryName,
                articleDetails : articleName.articleDescription,
                articleId : articleId
                }
            );

         },


         deleteArticleById : function (currentArticleId){

             //delete is reserved word and uncompatible with IE 8 or erlier
             //return $http.delete('/deleteArticleById/' + currentArticleId);

             return $http['delete']('/deleteArticleById/' + currentArticleId);
         }



    };  
}