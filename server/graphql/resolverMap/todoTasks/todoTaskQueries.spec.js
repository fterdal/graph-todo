/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { allTodoTasks, todoTaskById },
} = require('../../index');
const { reset } = require('../mocks');

// TODO: Refactor this to const { expect } = require('chai');
// and delete the above const chai
const expect = chai.expect;

describe('TodoTask Query Resolvers', () => {

    beforeEach(() => {
      reset();
    })

    it('todoTaskById takes an argument and returns a TodoTask', () => {
      expect(todoTaskById({ id: 1 })).to.deep.equal({
        id: 1,
        title: 'groceries',
        text: 'get milk, eggs, and bear traps',
        completed: false,
      });
    });

    it('allTodoTasks returns all TodoTasks', () => {
      const todoTasks = allTodoTasks();
      expect(todoTasks).to.have.length(4);
      expect(todoTasks[1]).to.deep.equal({
        id: 2,
        title: 'clothes shopping',
        text: 'get some new pants and socks',
        completed: false,
      })
    });

});
