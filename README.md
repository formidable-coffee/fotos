# fotos

https://waffle.io/formidable-coffee/fotos

# Database setup

1. Make sure that mysql server is running with in the terminal (by default there is no password):

    ```
    $ mysql -u root -p
    ```
2. Create a database called, `fotos`. For more information, visit this [great tutorial](https://www.digitalocean.com/community/tutorials/a-basic-mysql-tutorial):

    ```
    mysql> CREATE DATABASE fotos;
    ```
3. Open up the database:

    ```
    mysql> USE fotos;
    ```
4. Create account and specifiy privileges. Here, we will be creating an `admin` account with the password `formidable`, connection from `localhost` and all access to the database, fotos. More information about users and privileges can be found [here](http://dev.mysql.com/doc/refman/5.7/en/adding-users.html "mysql Docs") AND [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql "Digital Ocean's How-to")

    ```
    mysql> CREATE USER 'admin'@'localhost' IDENTIFIED BY 'formidable';
    mysql> GRANT ALL PRIVILEGES ON fotos.* TO 'admin'@'localhost';
    ```
To see privileges on the account you've just created:

    ```
    mysql> SHOW GRANTS FOR 'admin'@'localhost';
    ```
# Server setup

1. Start the server by running the following command from the root directory:

    ```
    $ nodemon server/server.js
    ```
Or

    ```
    $ node server/server.js
    ```
2. Your server is now live at http://localhost:4000

# Seed database with example data

1. Run the seed.js file from the terminal from the root directory:

    ```
    $ node seed.js
    ```