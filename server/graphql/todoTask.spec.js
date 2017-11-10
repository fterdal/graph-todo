/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  schema: { _typeMap: { TodoTask } },
  resolverMap: { TodoTaskById, AllTodoTasks },
} = require('./index');

const expect = chai.expect;

describe('Todo Task', () => {

  describe('Fields', () => {

    it('has fields id, title, text, completed', () => {
      expect(TodoTask._fields).to.have.all.keys('id', 'title', 'text', 'completed');
    });

    it('id is a required Int', () => {
      expect(String(TodoTask._fields.id.type)).to.equal('Int!');
    });
    it('title is a String', () => {
      expect(String(TodoTask._fields.title.type)).to.equal('String');
    });
    it('text is a String', () => {
      expect(String(TodoTask._fields.text.type)).to.equal('String');
    });
    it('completed is a Boolean', () => {
      expect(String(TodoTask._fields.completed.type)).to.equal('Boolean');
    });

  })

  describe('Resolvers', () => {

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

  })


});
