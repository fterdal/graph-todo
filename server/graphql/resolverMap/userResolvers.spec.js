/* eslint new-cap:0 */
'use strict';

const chai = require('chai');

const {
  resolverMap: { AllUsers, UserById },
} = require('../index');
const { mockUsers } = require('./mocks');

const expect = chai.expect;

describe('User Resolvers', () => {

  it('UserById takes an argument and returns a User', () => {
    expect(UserById({ id: 1 })).to.deep.equal(mockUsers[0]);
  });

  it('AllUsers returns all Users', () => {
    const allUsers = AllUsers();
    expect(allUsers).to.have.length(4);
    expect(allUsers[1]).to.deep.equal(mockUsers[1])
  });

});
