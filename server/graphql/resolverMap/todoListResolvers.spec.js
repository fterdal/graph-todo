/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { AllTodoLists, TodoListById },
} = require('../index');
const { mockTodoLists } = require('./mocks');

const expect = chai.expect;

describe('TodoList Resolvers', () => {

    it('TodoListById takes an argument and returns a TodoList', () => {
      expect(TodoListById({ id: 1 })).to.deep.equal(mockTodoLists[0]);
    });

    it('AllTodoLists returns all TodoLists', () => {
      const allTodoLists = AllTodoLists();
      expect(allTodoLists).to.have.length(5);
      expect(allTodoLists[1]).to.deep.equal(mockTodoLists[1])
    });

});
