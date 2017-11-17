/* eslint new-cap:0 */
'use strict';

const chai = require('chai');
const request = require('supertest');

const app = require('./index');

const expect = chai.expect;

describe('GraphQL Server', () => {

  describe('TodoTask Queries', () => {

    it('valid todoTaskById query responds with status 200 & JSON body', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            todoTaskById(id: 1) {
              id
              title
              text
              completed
            }
          }
          `})
        .expect(200)
        .then(res => {
          expect(JSON.parse(res.text)).to.deep.equal({
            data: {
              todoTaskById: {
                id: 1,
                title: 'groceries',
                text: 'get milk, eggs, and bear traps',
                completed: false,
              }
            }
          })
        })
    })

    it('valid allTodoTasks query responds with status 200 & JSON body', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            allTodoTasks {
              id
              title
              text
              completed
            }
          }
          `})
        .expect(200)
        .then(res => {
          const parsedResData = JSON.parse(res.text).data;
          expect(parsedResData).to.have.own.property('allTodoTasks');
          expect(parsedResData.allTodoTasks).to.have.length(4);
          expect(parsedResData.allTodoTasks[1]).to.deep.equal({
            id: 2,
            title: 'clothes shopping',
            text: 'get some new pants and socks',
            completed: false,
          })
        })
    })

    it('responds to invalid query with 400', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            # Missing id argument
            todoTaskById {
              id
              title
              text
              completed
            }
          }
          `})
        .expect(400)
        .then(res => {
          const parsedRes = JSON.parse(res.text);
          expect(parsedRes).to.have.own.property('errors');
          expect(parsedRes).to.not.have.own.property('data');
        })
    })

  })

  describe('User Queries', () => {

    it('valid userById query responds with status 200 & JSON body', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            userById(id: 1) {
              id
              email
            }
          }
          `})
        .expect(200)
        .then(res => {
          expect(JSON.parse(res.text)).to.deep.equal({
            data: {
              userById: {
                id: 1,
                email: 'bobby@gmail.com',
              }
            }
          })
        })
    })

    it('valid allUsers query responds with status 200 & JSON body', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            allUsers {
              id
              email
            }
          }
          `})
        .expect(200)
        .then(res => {
          const parsedResData = JSON.parse(res.text).data;
          expect(parsedResData).to.have.own.property('allUsers');
          expect(parsedResData.allUsers).to.have.length(4);
          expect(parsedResData.allUsers[1]).to.deep.equal({
            id: 2,
            email: 'ellen@yahoo.com',
          })
        })
    })

    it('nested user object with taskList and tasks', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            userById(id: 1) {
              id
              email
              todoLists {
                id
                name
              }
            }
          }
          `})
        .expect(200)
        .then(res => {
          expect(JSON.parse(res.text)).to.deep.equal({
            data: {
              userById: {
                id: 1,
                email: 'bobby@gmail.com',
                todoLists: [
                  {
                    id: 1,
                    name: 'first list',
                  },
                  {
                    id: 5,
                    name: 'fifth list',
                  }
                ]
              }
            }
          })
        })
    })

    it('responds to invalid query with 400', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            # Missing id argument
            userById {
              id
              email
            }
          }
          `})
        .expect(400)
        .then(res => {
          const parsedRes = JSON.parse(res.text);
          expect(parsedRes).to.have.own.property('errors');
          expect(parsedRes).to.not.have.own.property('data');
        })
    })

  })

  describe('TodoList Queries', () => {

    it('valid todoListById query responds with status 200 & JSON body', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            todoListById(id: 1) {
              id
              name
              description
            }
          }
          `})
        .expect(200)
        .then(res => {
          expect(JSON.parse(res.text)).to.deep.equal({
            data: {
              todoListById: {
                id: 1,
                name: 'first list',
                description: 'go do some stuff',
              }
            }
          })
        })
    })
    it('valid allTodoList query responds with status 200 & JSON body', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            allTodoLists {
              id
              name
              description
            }
          }
          `})
        .expect(200)
        .then(res => {
          const parsedResData = JSON.parse(res.text).data;
          expect(parsedResData).to.have.own.property('allTodoLists');
          expect(parsedResData.allTodoLists).to.have.length(5);
          expect(parsedResData.allTodoLists[1]).to.deep.equal({
            id: 2,
            name: 'second list',
            description: 'get busy!',
          })
        })
      })

      it('responds to invalid query with 400', () => {
        return request(app)
          .post('/graphql')
          .set('Accept', 'application/json')
          .send({ query: `
            {
              # Missing id argument
              todoListById {
                id
                name
                description
              }
            }
            `})
          .expect(400)
          .then(res => {
            const parsedRes = JSON.parse(res.text);
            expect(parsedRes).to.have.own.property('errors');
            expect(parsedRes).to.not.have.own.property('data');
          })
      })

  })

});
