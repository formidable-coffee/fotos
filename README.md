# fotos

https://waffle.io/formidable-coffee/fotos

##Table of Contents
1. [Project Overview] (#Project-Overview)
2. [Getting Started] (#Getting-Started)
3. [Technologies] (#Technologies)
4. [Architecture] (#Architecture)
5. [Team] (#Team)
6. [Contributing] (#Contributing)


##Project Overviw

Most people have hundreds of photos stored in countless websites. It takes a significant amount of time to scroll through all of your photos to find your best memories from years ago. With Foto Time, we give you access to your memories. Choose a time range and we'll pick out a few photos from that time period. All of your photo stories are saved with Foto Time so you can review them anytime. 

### Login with Facebook:
![login](https://cloud.githubusercontent.com/assets/17868916/15845438/f1518f9c-2c27-11e6-8f01-d8d4ed98cc33.png)
### See your stories:
![stories] (https://cloud.githubusercontent.com/assets/17868916/15845440/f15528dc-2c27-11e6-8a64-2fd9fdd9ed69.png)
### Create a new story:
![create-new](https://cloud.githubusercontent.com/assets/17868916/15845439/f152baa2-2c27-11e6-944e-e518f249d792.png)
## Getting Started

### Project Setup

1. Install dependencies

    ```
    $ npm install; 
    ```

### Setup Database

1. Initialize a mySQL server:

    ```
    $ mysql.server start
    Starting mySQL
      SUCCESS!
    ```
1. Start a mySQL server with in the terminal (by default there is no password):

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
### Start server

1. Start the server by running the following command from the root directory:

    ```
    $ nodemon server/server.js
    ```
Or

    ```
    $ node server/server.js
    ```
2. Your server is now live at http://localhost:4000

### Making changes

1. Changes to React components that interact with our server and database

    ```
    $ npm prod
    ```
2. Monitor changes to just front end components
    
    ```
    $ npm start
    ````
##Technologies

#### Front end: 
- React
- Babel
- React Router
- React Bootstrap
- Facebook Graph API/SDK

#### Back end: 
- Express
- Node
- Bookshelf/Knex
- MySQL

#### Database Schema:

![DBschema](https://raw.githubusercontent.com/formidable-coffee/fotos/master/server/db/Screen%20Shot%202016-05-30%20at%2015.16.35.png)

###Directory Layout
    ```
    +-- /client/
    |   +-- /app.jsx/
    |   +-- /arc.jsx/
    |   +-- /fbook-button.jsx/
    |   +-- /feed.jsx/
    |   +-- /form.jsx/
    |   +-- /login.jsx/
    |   +-- /main.jsx/
    |   +-- /nav.jsx/
    +-- /config/
    +-- /mockups/
    +-- /node_modules/
    +-- /public/
    |   +-- /styles/
    |   |   +-- /style.css
    |   |   +-- /superhero.css
    |   +-- /bundle.js
    |   +-- /index.html
    +-- /server
    |   +-- /collections/
    |   |   +-- /arcs.js
    |   |   +-- /images.js
    |   |   +-- /users.js
    |   +-- /models/
    |   |   +-- /arc.js
    |   |   +-- /image.js
    |   |   +-- /user.js
    |   +-- /server_helpers
    |   |   +-- /middleware.js
    |   |   +-- /request-handler.js
    |   +-- /server.js
    +-- /package.json
    +-- /STYLE-GUIDE.md
    +-- /webpack.config.js

## Team
    - Matt Naing @mattgrisanu
    - Adam Lessen @lessenadam
    - Erin Kavanaugh @erinkav
