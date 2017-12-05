/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { allTodoLists, todoListById }
} = require('../../index');

const expect = chai.expect;

describe('TodoList Query Resolvers', () => {

    it('todoListById takes an argument and returns a TodoList', () => {
      expect(todoListById({ id: 1 })).to.deep.equal({
        id: 1,
        name: 'first list',
        description: 'go do some stuff',
        tasks: [
          {
            id: 1,
            title: 'groceries',
            text: 'get milk, eggs, and bear traps',
            completed: false
          },
          {
            id: 2,
            title: 'clothes shopping',
            text: 'get some new pants and socks',
            completed: false
          }
        ]
      })
    });

    it('allTodoLists returns all TodoLists', () => {
      const todoLists = allTodoLists();
      expect(todoLists).to.have.length(5);
      expect(todoLists[1]).to.deep.equal({
        id: 2,
        name: 'second list',
        description: 'get busy!',
        tasks: [
          {
            id: 3,
            title: 'letter to grandma',
            text: 'remember to mention grandpa\'s upcoming birthday',
            completed: true
          },
          {
            id: 4,
            title: 'change oil in car',
            text: undefined,
            completed: false
          }
        ]
      })
    })

});
