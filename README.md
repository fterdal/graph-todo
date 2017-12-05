# GraphTODO

This is a *super simple* Todo list application using Express and GraphQL
(and maybe others as needs arise).

## Getting Started

1. Clone the repo:
```
git clone https://github.com/fterdal/graph-todo
```
2. Install the Packages:
```
cd graph-todo
yarn # This project uses yarn. `npm i` should also work.
```
3. Start the server:
```
yarn start
```


## TODO

1. As a logged-in user, I should be able to
     - create new todoLists
     - add todoTasks to existing todoLists
     - mark todoTasks as complete/uncompleted
2. As the developer of this application, I should have some data seeded to the db
     - rewrite the seed file so that it seeds the database
     - add a yarn command to seed the database
     - connect the tests to a new test database
3. As the developer of this application, I should be able to run the tests
     - rewrite the tests with the new functionality in mind
     - move the tests from that tests folder to each individual file
