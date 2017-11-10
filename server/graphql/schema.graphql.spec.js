/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const { schema: { _typeMap: { TodoTask, User } } } = require('./index');

const expect = chai.expect;

describe('GraphQL Schema', () => {

  describe('TodoTask Fields', () => {

    it('has fields id, title, text, completed', () => {
      expect(TodoTask._fields).to.have.all.keys('id', 'title', 'text', 'completed');
    });

    it('id is a required Int', () => {
      expect(String(TodoTask._fields.id.type)).to.equal('Int!');
    });

    it('title is a String', () => {
      expect(String(TodoTask._fields.title.type)).to.equal('String');
    });

    it('text is a String', () => {
      expect(String(TodoTask._fields.text.type)).to.equal('String');
    });

    it('completed is a Boolean', () => {
      expect(String(TodoTask._fields.completed.type)).to.equal('Boolean');
    });
  })

  describe('User Fields', () => {

    it('has fields id, email', () => {
      expect(User._fields).to.have.all.keys('id', 'email');
    });

    it('id is a required Int', () => {
      expect(String(User._fields.id.type)).to.equal('Int!');
    });

    it('email is a required String', () => {
      expect(String(User._fields.email.type)).to.equal('String!');
    });

  })


});
