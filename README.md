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

1. As an existing user, I should be able to login.
    - Ideally, let's not worry about databases and persistence just yet.
2. As a new user, I should be able to create an account.
    - Ideally, let's implement this (and the above login behavior) as a GraphQL
      mutation instead of a lonely REST route to handle auth.
