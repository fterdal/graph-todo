'use strict';

const chai = require('chai');

const { schema, resolverMap } = require('./index');

// const todoTaskType = todoTask.type;
const expect = chai.expect;

describe('Todo Task', () => {
  // Tests
  before(() => {
    // console.log('schema', schema);
  });

  describe('Fields', () => {

    it('has the fields id, title, text, completed', () => {
      expect(Object.keys(schema._typeMap.TodoTask._fields)).to.contain('id');
      expect(Object.keys(schema._typeMap.TodoTask._fields)).to.contain('title');
      expect(Object.keys(schema._typeMap.TodoTask._fields)).to.contain('text');
      expect(Object.keys(schema._typeMap.TodoTask._fields)).to.contain('completed');
    });

    it('id is a string', () => {
      // console.log(Object.keys(schema._typeMap.TodoTask));

      console.log('Object.keys(schema._typeMap.TodoTask._fields.id.type)',
        Object.keys(schema._typeMap.TodoTask._fields.id.type)
      );
      // expect(schema._typeMap.TodoTask._fields.id.type).to.equal('Int!');
      // console.log('type of completed field:', schema._typeMap.TodoTask._typeConfig.astNode.fields[3].type.name.value);
      // expect(Object.keys(schema._typeMap.TodoTask._fields)).to.contain('id');
      // expect(Object.keys(schema._typeMap.TodoTask._fields)).to.contain('title');
      // expect(Object.keys(schema._typeMap.TodoTask._fields)).to.contain('text');
      // expect(Object.keys(schema._typeMap.TodoTask._fields)).to.contain('completed');
    });

  })

  describe('Resolvers', () => {

    xit('just a sample test', () => {
      // console.log('resolverMap.TodoTaskById', resolverMap.TodoTaskById);
      expect(true);
    });

  })


});
