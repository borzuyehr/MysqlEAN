# MysqlEAN
An application using Express, Angular, Node, and MySQL for the database.
This application is built to run on all browsers.  


###Installation instruction for npm on OS X:

First we must install npm.

1. Use the following link to install npm:

    https://nodejs.org/en/


###Installation instruction for bower on OS X:

Once npm is installed, we can use it to install bower

1. Install bower using npm

    `$ npm install -g bower`  


###Installation instruction for Node.js and Express.js template on OS X:

Now we must install our application template.

1. Create directory for the application

        `$ mkdir article`    
        `$ cd article`

2. Create a package.json for the application

		`$ npm init`

3. Press return/enter to accept the defaults

4. Now install the express application

        `$ npm install express --save`


###Installation instruction for Bootstrap on OS X:

Now we must install Bootstrap for GUI templates

1. Change to the directory of ths article application if not already there
   
        `$ cd article`

2. Install Bootstrap

		`$ npm install bootstrap@3 --save`


###Installation instruction for JQuery on OS X:

Now we must install jquery 

1. Change to the directory of ths article application if not already there
   
        `$ cd article`

2. Install jquery

		`$ npm install jquery --save`


###Installation instruction for Angular.js on OS X:

Now we will use bower to install angular components

1. Change to the directory of ths article application if not already there
   
        `$ cd article`

2. Install angular.js components using bower

		`$ bower install angularjs`


###Installation instruction for MySQL on OS X:

Now we will install and launch the mysql server

1. Change to the directory of ths article application if not already there
   
        `$ cd article`

2. Download the server

        http://dev.mysql.com/downloads/mysql/

4. In system preference click on MYSQL icon

        /*** MAKE SURE TO RECORD TEMPRORARY PASSWORD ***/

        click on start MYSQL

5. Navigate to the mysql bin directory

        `$ cd /usr/local/mysql/bin`

5. Login with temporary password in terminal

        `$ ./mysql -u root -p`

6. Type in temporary password

7. Change the password to your own password

        `mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('new-password-here');`

8. End expiration of the user password !!!!DO NOT USE ON A REAL SERVER!!!!

        `mysql> ALTER USER 'root'@'localhost' PASSWORD EXPIRE NEVER;`

9. After login to server type following command to access database

        `mysql> use mysql`

10. Once the server installation steps on are complete, use terminal to install 
   mysql in the application

        `$ npm install mysql -save`

