/* eslint new-cap:0 */
'use strict';

const chai = require('chai');
const request = require('supertest');

const app = require('./index');

const expect = chai.expect;

describe('GraphQL Queries', () => {

  describe('TodoTask Queries', () => {
    it('responds to valid query with JSON', () => {
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
          console.log(res.text);
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
  })

  describe('User Queries', () => {

  })

  describe('TodoList Queries', () => {

  })

});
