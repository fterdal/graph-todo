/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { allUsers, userById },
} = require('../../index');

const expect = chai.expect;

describe('User Query Resolvers', () => {

  it('userById takes an argument and returns a User', () => {
    const bobby = userById({ id: 1 });
    expect(bobby).to.have.all.keys('id', 'email', 'todoLists');
    expect(bobby.email).to.equal('bobby@gmail.com');
    expect(bobby.todoLists).to.have.length(2);
    expect(bobby.todoLists[1].tasks[0]).to.have.all.keys(
      'id',
      'title',
      'text',
      'completed',
    );
  });

  it('allUsers returns all Users', () => {
    const users = allUsers();
    expect(users).to.have.length(4);
    expect(users[1]).to.have.all.keys('id', 'email', 'todoLists');
  });

});
