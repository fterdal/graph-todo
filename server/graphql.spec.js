/* eslint new-cap:0 */
'use strict';

const chai = require('chai');
const request = require('supertest');

const app = require('./index');

const expect = chai.expect;

describe('GraphQL Server', () => {

  it('responds to incorrect URI with 404', () => {
    return request(app)
      .post('/wrongGraphQLURL')
      .set('Accept', 'application/json')
      .send({ query: `
        {
          TodoTaskById(id: 1) {
            id
            title
            text
            completed
          }
        }
        `})
      .expect(404)
  })

  describe('TodoTask Queries', () => {

    it('valid TodoTaskById query reqponds with status 200 & JSON body', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            TodoTaskById(id: 1) {
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
              TodoTaskById: {
                id: 1,
                title: 'groceries',
                text: 'get milk, eggs, and bear traps',
                completed: false,
              }
            }
          })
        })
    })

    it('valid AllTodoTasks query reqponds with status 200 & JSON body', () => {
      return request(app)
        .post('/graphql')
        .set('Accept', 'application/json')
        .send({ query: `
          {
            AllTodoTasks {
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
          expect(parsedResData).to.have.own.property('AllTodoTasks');
          expect(parsedResData.AllTodoTasks).to.have.length(4);
          expect(parsedResData.AllTodoTasks[1]).to.deep.equal({
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
            TodoTaskById {
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

  })

  describe('TodoList Queries', () => {

  })

});
