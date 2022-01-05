# Movie Catalogue App

## Stack
- TypeScript
- PostgreSQL

**Backend:**
- Express.js
- Sequelize & Sequlize-typescript
- Graphql

**Front:**
- React
- Material UI (version 4)
- Apollo for graphql

**Movie Data:**
- The Movie DB https://www.themoviedb.org/


## 1. Install packages

- At root, run npm install
```
npm install
```
- Go into client folder and run npm install again
```
cd client
npm install
```

## 2. Install Postgres and Create Database

1. postgres 설치 (For Mac,,, Sorry to Window use,, please,, google it)

> if you don't have the Homebrew, please install Homebrew first https://brew.sh/
```
brew install postgresql
```

1. Start Postgres service via Homebrew
```
brew services start postgresql
brew services stop postgresql
brew services restart postgresql
```

3. Start Postgres
``` psql postgres```

4. Create Database
```
postgres=# CREATE USER movie_app WITH SUPERUSER PASSWORD 'movie';
postgres=# CREATE DATABASE movie OWNER movie_app;
```

## 3. Update Sample Data to Database
1. Start server at root
```npm run server```

2. Run sequelize
```
npx sequelize-cli db:seed:all
```

## 4. Run app and check the data
1. Start app at root
```
npm ren dev

It will start both server and client
You can check the command on package.json at root
```

2. Check the data using Graphql
    1.  Go to http://localhost:5000/graphql
    2.  Trying sample query and mutation
    ```
    query getallUserTest {
	    getUsers {
        id
        firstName
        lastName
        email
      }
    }

    or

    mutation registerUserTest1 {
      registerUser (firstName: "Welcome", lastName: "Hi", email: "hellow@world.com", password: "movie") {
        firstName,
        lastName,
        email
      }
    }
    ```


## ToDo
1. Login Page
    1. if the user enter an invalid email or password, display error message

2. Register Page
    1. Check the First and Last name are valid or not

3. Home page
    1. For now, only show first page of new releases movie, but there are total 20 pages.
       So, I need to make a button "Load more" to show more movies

4. Maintain User Login states
    1. I will try JWT to maintain user login

5. Search the movie by genre, title and actor
    1. there is the API address for searching the movie regardless of genre, title or actor. However, if I use this API, there is an error, like
    ```
    Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your
    application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    ```

6. Favorite movie
    1. There is the API for marking the movie as favorite, but they require the seesion id,,, I have to do step 4.

7. Responsive app
   1. Make a different browser size and mobile size