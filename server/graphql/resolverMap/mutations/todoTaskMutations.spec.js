/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { completeTaskById }
} = require('../../index');
const { mockTodoTasks } = require('../mocks');

const expect = chai.expect;

describe('TodoTask Mutation Resolvers', () => {

    it('completeTaskById takes an id argument and changes the matching todoTask', () => {
      const todoTaskBefore = { ...mockTodoTasks[0] };
      const returnedTodoTask = completeTaskById({ id: 1 });
      const todoTaskAfter = mockTodoTasks[0];
      expect(todoTaskBefore.completed).to.not.equal(todoTaskAfter.completed)
      expect(returnedTodoTask).to.deep.equal(todoTaskAfter);
    });

});
