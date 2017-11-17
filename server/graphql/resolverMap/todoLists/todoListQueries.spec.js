/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { allTodoLists, todoListById }
} = require('../../index');
const { mockTodoLists } = require('../mocks');

const expect = chai.expect;

describe('TodoList Query Resolvers', () => {

    it('todoListById takes an argument and returns a TodoList', () => {
      expect(todoListById({ id: 1 })).to.deep.equal(mockTodoLists[0]);
    });

    it('allTodoLists returns all TodoLists', () => {
      const todoLists = allTodoLists();
      expect(todoLists).to.have.length(5);
      expect(todoLists[1]).to.deep.equal(mockTodoLists[1])
    });

});
