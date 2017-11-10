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

    it('has the fields id, title, text, completed', () => {
      expect(Object.keys(TodoTask._fields)).to.contain('id');
      expect(Object.keys(TodoTask._fields)).to.contain('title');
      expect(Object.keys(TodoTask._fields)).to.contain('text');
      expect(Object.keys(TodoTask._fields)).to.contain('completed');
    });

    it('id is a required Int', () => {
      expect(String(TodoTask._fields.id.type)).to.equal('Int!');
    });

  })

  describe('Resolvers', () => {

    xit('just a sample test', () => {
      // console.log('resolverMap.TodoTaskById', resolverMap.TodoTaskById);
      expect(true);
    });

  })


});
