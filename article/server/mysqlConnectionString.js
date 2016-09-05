var mysqlConnectionString = {

    connection :{

        dev : {
            port: '3306',
            host: 'localhost',
            user: 'root',
            password : 'Shirinminoo20',
            database : 'articlemanagement'
        },

        qa : {
            host: 'localhost',
            user: 'root',
            password : 'yourtestpassword',
            database : 'yourdatabase'
        },
        
        prod : {
            host: 'urProductionHost',
            user: 'userId',
            password : 'password',
            database : 'databaseName'
        }

    }

};

module.exports.mysqlConnectionString = mysqlConnectionString;