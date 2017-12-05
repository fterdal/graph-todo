/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { completeTaskById }
} = require('../../index');
const { todoTask } = require('../mocks');

const expect = chai.expect;

describe('TodoTask Mutation Resolvers', () => {

    beforeEach(() => {
      require('../mockSeed');
    })

    it('completeTaskById takes an id argument and changes the matching todoTask', () => {
      const todoTaskBefore = {...todoTask({id: 1})}
      const returnedTodoTask = completeTaskById({ id: 1 });
      const todoTaskAfter = {...todoTask({id: 1})}
      expect(todoTaskBefore.completed).to.not.equal(todoTaskAfter.completed)
      expect(returnedTodoTask).to.deep.equal(todoTaskAfter);
    });

});
