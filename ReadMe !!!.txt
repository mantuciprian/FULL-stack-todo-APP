******************** HOW TO RUN THE APP **********************

!!!!!!! You must have PostgreSQL installed on your computer !!!!

1. ! Import the database from DB folder

here is a example of how you should do that : 

D:\programming\postress\bin>psql -U postgres -h localhost -p 5432 myDB  < D:\exportedDBs\todo_backup.sql;

 /// D:\programming\postress\bin> - my postgres instalation folder  

 /// -U : user

 /// -h : host

 /// -p : port
 
 /// myDB : database that I want to import the data

 /// < D:\exportedDBs\todo_backup.sql; : location of the DB, you should export the 

todo_backup.sql from this 'DB' folder.

you can know if the import was properly done if you see in the console something like :

///////////

SET
SET
 set_config
------------

(1 row)

SET
SET
SET
CREATE EXTENSION
COMMENT
CREATE SEQUENCE
ALTER TABLE
SET
SET
CREATE TABLE
ALTER TABLE
COPY 3
 setval
--------
     40
(1 row)

ALTER TABLE

/////////


2. ! Config the app.js file

    a. look for 'const client' from  app/app.js 
    
    b. change the user, host, database password and port with your postgres configuration


3.  How to start the app 

    a. Go to app folder, open your cmd or use git bash here . After you open the console,

    type : node app.js and hit enter; If it says 'server started on port 3000...' , it

    means that you can go to the next step...

    b. Go to client/todo-app/ , open your cmd or use git bash here .  
 
    After you open the console, type : 'npm start' , hit enter and wait until it says

    'webpack: Compiled successfully.' then open your browser and go to 

    http://localhost:4200/home . If every thing works well, you should be able to see

    a table with 3 actions : clean up the room, wake up at 8 am Sunday and wash the car.
  