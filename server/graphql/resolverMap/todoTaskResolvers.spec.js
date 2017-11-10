/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { AllTodoTasks, TodoTaskById },
} = require('../index');

const expect = chai.expect;

describe('TodoTask Resolvers', () => {

    it('TodoTaskById takes an argument and returns a TodoTask', () => {
      expect(TodoTaskById({ id: 1 })).to.deep.equal({
        id: 1,
        title: 'groceries',
        text: 'get milk, eggs, and bear traps',
        completed: false,
      });
    });

    it('AllTodoTasks returns all TodoTasks', () => {
      const allTodoTasks = AllTodoTasks();
      expect(allTodoTasks).to.have.length(4);
      expect(allTodoTasks[1]).to.deep.equal({
        id: 2,
        title: 'clothes shopping',
        text: 'get some new pants and socks',
        completed: false,
      })
    });

});
