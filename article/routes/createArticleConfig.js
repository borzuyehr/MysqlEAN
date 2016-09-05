function createArticleConfig(app){

    this.app = app;
    this.routeTable = [];
    this.init();
}


createArticleConfig.prototype.init = function () {

    var self = this;
    this.addRoutes();
    this.processRoutes();
}


createArticleConfig.prototype.addRoutes = function (){

    var self = this;

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/createArticle',
        callbackFunction : function (request, response){

            response.render('createArticle', { title : "Create Article" });
        }
    });


   self.routeTable.push({

        requestType : 'post',
        requestUrl : '/createArticle',
        callbackFunction : function (request, response){

           var articleDao = require ('../server/Dao/articleDao.js')

           console.log(request.body);

           //we need Dao(data access object) api that knows how to persist data into mysql
           articleDao.articleDao.createArticleCategory(request.body, function (status){

               response.json(status);
               console.log(status);
           });
        }
    });


    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/viewArticles',
        callbackFunction : function (request, response){

            response.render('viewArticles', { title : "View Articles In Database" });
        }
    });


    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/getAllArticles',
        callbackFunction : function (request, response){

            var articleDao = require ('../server/Dao/articleDao.js')

            console.log(request.body);

            articleDao.articleDao.getAllArticles(
                function (articles){

               console.log(articles);
               response.json({articles : articles});
           });
        }
    });


    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/editArticles/:articleId',
        callbackFunction : function (request, response){

            response.render('editArticles', { title : "Edit Article" });
        }
    });


    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/getArticleCategoryById/:articleId',
        callbackFunction : function (request, response){

            var articleDao = require ('../server/Dao/articleDao.js')

            console.log(request.body);

            articleDao.articleDao.getArticleById(request.params.articleId,
                function (articles){

               console.log(articles);
               response.json({articles : articles});
           });
        }
    });


    self.routeTable.push({

        requestType : 'post',
        requestUrl : '/updateArticle',
        callbackFunction : function (request, response){

           var articleDao = require ('../server/Dao/articleDao.js')

           console.log(request.body.nameOfArticle);
           console.log(request.body.articleDetails);
           console.log(request.body.articleId);

           //we need Dao(data access object) api that knows how to persist data into mysql
           articleDao.articleDao.updateArticleById(request.body.nameOfArticle, request.body.articleDetails,
                                                   request.body.articleId, 
           function (status){

               response.json(status);
               console.log(status);
           });
        }
    });


    self.routeTable.push({

        requestType : 'delete',
        requestUrl : '/deleteArticleById/:articleId',
        callbackFunction : function (request, response){

           var articleDao = require ('../server/Dao/articleDao.js')

           console.log(request.params.articleId);
         

           //we need Dao(data access object) api that knows how to persist data into mysql
           articleDao.articleDao.deleteArticleById(request.params.articleId,
           function (status){

               response.json(status);
               console.log(status);
           });
        }
    });
}


createArticleConfig.prototype.processRoutes = function (){
    
    var self = this;

    self.routeTable.forEach(function (route) {
        
        if (route.requestType == 'get'){

            self.app.get(route.requestUrl, route.callbackFunction); 
        }
        else if (route.requestType == 'post'){

            console.log(route);
            self.app.post(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'delete'){
            
            console.log(route);
            self.app.delete(route.requestUrl, route.callbackFunction);
        }
    });
}

module.exports = createArticleConfig;