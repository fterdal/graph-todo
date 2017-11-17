/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { allUsers, userById },
} = require('../../index');
const { mockUsers } = require('../mocks');

const expect = chai.expect;

describe('User Queries', () => {

  it('userById takes an argument and returns a User', () => {
    expect(userById({ id: 1 })).to.deep.equal(mockUsers[0]);
  });

  it('allUsers returns all Users', () => {
    const users = allUsers();
    expect(users).to.have.length(4);
    expect(users[1]).to.deep.equal(mockUsers[1])
  });

});
