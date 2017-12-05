/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
   schema: { _typeMap: { TodoTask, User, TodoList } }
} = require('./index');

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

    it('has fields id, email, todoLists', () => {
      expect(User._fields).to.have.all.keys('id', 'email', 'todoLists');
    });

    it('id is a required Int', () => {
      expect(String(User._fields.id.type)).to.equal('Int!');
    });

    it('email is a required String', () => {
      expect(String(User._fields.email.type)).to.equal('String!');
    });

    it('todoList is an array of TodoLists', () => {
      expect(String(User._fields.todoLists.type)).to.equal('[TodoList]');
    });

  })

  describe('TodoList Fields', () => {

    it('has fields id, name, description, tasks', () => {
      expect(TodoList._fields).to.have.all.keys('id', 'name', 'description', 'tasks');
    });

    it('id is a required Int', () => {
      expect(String(TodoList._fields.id.type)).to.equal('Int!');
    });

    it('name is a required String', () => {
      expect(String(TodoList._fields.name.type)).to.equal('String');
    });

    it('description is a required String', () => {
      expect(String(TodoList._fields.description.type)).to.equal('String');
    });

    it('tasks is a required array of TodoItems', () => {
      expect(String(TodoList._fields.tasks.type)).to.equal('[TodoTask]!');
    });

  })


});
