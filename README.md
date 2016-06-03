# fotos

https://waffle.io/formidable-coffee/fotos

# Database setup

1. Make sure that mysql server is running with in the terminal (by default there is no password):

```
$ mysql -u root -p
```
2. Create a database called, `fotos`:
  <https://www.digitalocean.com/community/tutorials/a-basic-mysql-tutorial>

```
mysql> CREATE DATABASE fotos;
```
3. Open up the database:

```
mysql> USE fotos;
```
4. Create account and specifiy privileges. Here, we will be creating an `admin` account with the password `formidable`, connection from `localhost` and all access to the database, fotos:
  <http://dev.mysql.com/doc/refman/5.7/en/adding-users.html> and 
  <https://www.digitalocean.com/community/tutorials/how-to-create-a-new-user-and-grant-permissions-in-mysql>

```
mysql> CREATE USER 'admin'@'localhost' IDENTIFIED BY 'formidable';
mysql> GRANT ALL PRIVILEGES ON fotos.* TO 'admin'@'localhost';
```
  To see privilegs on the account you've just created:

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
node server/server.js
```
2. Your server is now live at http://localhost:4000