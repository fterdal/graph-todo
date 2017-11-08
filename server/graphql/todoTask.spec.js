'use strict';

const graphql = require('graphql');
const chai = require('chai');

const todoTask = require('./todoTask');

const todoTaskType = todoTask.type;
const expect = chai.expect;

describe('Todo Task', () => {
  // Tests

  describe('Fields', () => {

    it('has a string field called id', () => {
      expect(todoTaskType.getFields()).to.have.property('id');
      expect(todoTaskType.getFields().id.type).to.deep.equals(graphql.GraphQLString);
    });

    it('has a string field called title', () => {
      expect(todoTaskType.getFields()).to.have.property('title');
      expect(todoTaskType.getFields().title.type).to.deep.equals(graphql.GraphQLString);
    });

    it('has a string field called text', () => {
      expect(todoTaskType.getFields()).to.have.property('text');
      expect(todoTaskType.getFields().text.type).to.deep.equals(graphql.GraphQLString);
    });

    it('has a boolean field called completed', () => {
      expect(todoTaskType.getFields()).to.have.property('completed');
      expect(todoTaskType.getFields().completed.type).to.deep.equals(graphql.GraphQLBoolean);
    });

  })


});
