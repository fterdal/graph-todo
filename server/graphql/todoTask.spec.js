'use strict';

const chai = require('chai');
const util = require('util');

const { schema, resolverMap } = require('./index');

// const todoTaskType = todoTask.type;
const expect = chai.expect;

describe('Todo Task', () => {

  const TodoTask = schema._typeMap.TodoTask;

  // Tests
  before(() => {
    // console.log('schema', schema);
  });

  describe('Fields', () => {

    it('has fields id, title, text, completed', () => {
      expect(Object.keys(TodoTask._fields)).to.contain('id');
      expect(Object.keys(TodoTask._fields)).to.contain('title');
      expect(Object.keys(TodoTask._fields)).to.contain('text');
      expect(Object.keys(TodoTask._fields)).to.contain('completed');
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

  describe('Resolvers', () => {

    xit('just a sample test', () => {
      // console.log('resolverMap.TodoTaskById', resolverMap.TodoTaskById);
      expect(true);
    });

  })


});
