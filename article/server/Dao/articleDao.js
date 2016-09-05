
var connectionProvider = require ('../mysqlConnectionStringProvider.js');

var articleDao = {

    createArticleCategory : function (articleCategory, onSuccessfulCallBack){

        var insertStatement = "INSERT INTO articleCategory SET?";

        var category = {

            CategoryName : articleCategory.nameOfArticle,
            Details : articleCategory.articleDetails,
            IsValid : true,
            CreatedDate : new Date ()

        };
        
        console.log(category);

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection ();

        if (connection) {

            connection.query(insertStatement, category, function (err, result){

                if (err){
                    throw err;
                }

                onSuccessfulCallBack({status : 'successful'});
                console.log(result);
                
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    },

    
    
    
    getAllArticles : function (callback) { 
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "SELECT * FROM articlecategory ORDER BY ID DESC";
        
        if (connection) {
            
            connection.query(queryStatement, function (err, rows, fields) {
                
                if (err) { throw err; }
                
                
                console.log(rows);

                callback(rows);
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    },


    getArticleById : function (articleId, callback) { 
    
        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection();
        var queryStatement = "SELECT * FROM articlecategory WHERE id= ?";
        
        if (connection) {
            
            connection.query(queryStatement, [articleId], function (err, rows, fields) {
                
                if (err) { throw err; }
                
                
                console.log(rows);

                callback(rows);
            });
            
            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    },


    updateArticleById : function (nameOfArticle, articleDetails, articleId, onSuccessfulCallBack){

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection ();
        var queryStatement = "UPDATE articlecategory SET CategoryName =?, ModifiedDate=?, Details=? WHERE id= ?";

        if (connection) {

            connection.query(queryStatement, [nameOfArticle, new Date(), articleDetails, articleId], function (err, rows, fields){

                if (err){
                    throw err;
                }

                if (rows){
                    onSuccessfulCallBack({status : 'successful'});
                }
                
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        }
    },



    deleteArticleById : function (articleId, onSuccessfulCallBack){

        var connection = connectionProvider.mysqlConnectionStringProvider.getMySqlConnection ();
        //I'm implementing a hard delete but IsValid exists for soft delete
        var queryStatement = "DELETE FROM articlecategory WHERE id= ?";

        if (connection) {

            connection.query(queryStatement, [articleId], function (err, rows, fields){

                if (err){
                    throw err;
                }

                if (rows){
                    onSuccessfulCallBack({status : 'successful'});
                }
                
            });

            connectionProvider.mysqlConnectionStringProvider.closeMySqlConnection(connection);
        } 
    }


};

module.exports.articleDao = articleDao;